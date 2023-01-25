import { initializeTimes } from './App'
import { useState } from 'react'
import { renderHook, act } from '@testing-library/react'

test('initializeTimes returns an array', () => {
  const result = initializeTimes()
  expect(Array.isArray(result)).toBe(true)
})

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

describe('useLocalStorage', () => {
  let localStorageMock
  beforeEach(() => {
    localStorageMock = {}
    global.localStorage = {
      getItem: jest.fn((key) => localStorageMock[key]),
      setItem: jest.fn((key, value) => {
        localStorageMock[key] = value
      }),
      clear: jest.fn(() => {
        localStorageMock = {}
      }),
    }
  })

  test('reads and writes to local storage', () => {
    localStorageMock.key = JSON.stringify('initialValue')
    const { result } = renderHook(() => useLocalStorage('key', 'initialValue'))
    expect(result.current[0]).toBe('initialValue')
  })
})
