import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import styles from './Forma.module.css';



const initialValues = {
  name: '',
  amount: 1,
  price: 0
};

const PRODUCT_SCHEMA = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Name is required'),
  amount: Yup.number().min(1).required(),
  price: Yup.number().min(0).required(),
});



const Forma = () => {

  //console.log(styles);

  const submitHandler = (values, formikBag) => { 
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  }

  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={PRODUCT_SCHEMA}
      >
        {() => (
          <Form>
            <div>
              <Field name="name" placeholder="Name: " />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div>
              <Field name="amount" placeholder="Amount: " />
              <ErrorMessage name="amount" component="div" className={styles.error} />
            </div>

            <div>
              <Field name="price" placeholder="Price: " />
              <ErrorMessage name="price" component="div" className={styles.error} />
            </div>

            <Field type="submit" value="Add" id="add" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forma;
