import BookingForm from '../BookingForm'

import { render, screen, fireEvent } from '@testing-library/react'

const myMock1 = jest.fn()

const setup = () => {
  render(
    <BookingForm
      values={[['17:00', '18:00', '19:00', '20:00', '21:00'], myMock1]}
    />
  )
  const dateInput = screen.getByLabelText('date-input')
  const timeInput = screen.getByLabelText('time-input')
  const dinerInput = screen.getByLabelText('diner-input')
  const outdoorInput = screen.getByLabelText('outdoor-input')
  const indoorInput = screen.getByLabelText('indoor-input')
  const occasionInput = screen.getByLabelText('occasion-input')
  const reserveButton = screen.getByLabelText('reserve-button')
  return {
    dateInput,
    timeInput,
    dinerInput,
    reserveButton,
    outdoorInput,
    indoorInput,
    occasionInput,
  }
}

test('check date input', () => {
  const { dateInput } = setup()
  fireEvent.change(dateInput, { target: { value: '2023-04-12' } })
  expect(dateInput.value).toBe('2023-04-12')
})

test('check time input', () => {
  const { timeInput } = setup()
  fireEvent.change(timeInput, { target: { value: '17:00' } })
  expect(timeInput.value).toBe('17:00')
})

test('check diner input', () => {
  const { dinerInput } = setup()
  fireEvent.change(dinerInput, { target: { value: '8' } })
  expect(dinerInput.value).toBe('8')
})

test('submit button disabled when information not filled', () => {
  const { reserveButton } = setup()
  expect(reserveButton).toHaveAttribute('disabled')
})

test('submit button is not disabled when information not filled', () => {
  const { reserveButton, indoorInput } = setup()
  fireEvent.click(indoorInput)
  expect(reserveButton).not.toHaveAttribute('disabled')
})
