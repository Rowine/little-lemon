import { initializeTimes } from './App'

test('initializeTimes returns an array', () => {
  const result = initializeTimes()
  expect(Array.isArray(result)).toBe(true)
})
