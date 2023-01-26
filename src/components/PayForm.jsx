import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './styles/PayForm.css'

const PaySchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().required('Required'),
  creditCardNumber: Yup.string().label('Card number').max(16).required(),
  cvc: Yup.string().label('CVC').min(3).max(4).required(),
  expiryDate: Yup.date().label('Expiry Date').required(),
})

const PayForm = () => {
  const navigate = useNavigate()

  return (
    <div className='reserve-container'>
      <h1>Payment</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          creditCardNumber: '',
          cvc: '',
          expiryDate: '',
        }}
        validationSchema={PaySchema}
        onSubmit={() => {
          navigate('/success')
        }}
      >
        {({ errors, touched }) => (
          <Form className='pay-form-container'>
            <div className='input-container'>
              <label>
                First Name:
                <Field className='field' name='firstName' />
                {errors.firstName && touched.firstName ? (
                  <div className='errors'>{errors.firstName}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                Last Name:
                <Field className='field' name='lastName' />
                {errors.lastName && touched.lastName ? (
                  <div className='errors'>{errors.lastName}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                Email:
                <Field className='field' name='email' type='email' />
                {errors.email && touched.email ? (
                  <div className='errors'>{errors.email}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                Address:
                <Field className='field' name='address' type='text' />
                {errors.address && touched.address ? (
                  <div className='errors'>{errors.address}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                Card Number:
                <Field
                  className='field'
                  name='creditCardNumber'
                  type='number'
                />
                {errors.creditCardNumber && touched.creditCardNumber ? (
                  <div className='errors'>{errors.creditCardNumber}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                CVC:
                <Field className='field' name='cvc' type='number' />
                {errors.cvc && touched.cvc ? (
                  <div className='errors'>{errors.cvc}</div>
                ) : null}
              </label>
            </div>
            <div className='input-container'>
              <label>
                Expiry Date:
                <Field className='field' name='expiryDate' type='date' />
                {errors.expiryDate && touched.expiryDate ? (
                  <div className='errors'>{errors.expiryDate}</div>
                ) : null}
              </label>
            </div>
            <button type='submit' className='pay-button'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default PayForm
