import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    alert('User registered successfully with Formik!');
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
              <Field
                type="text"
                name="username"
                style={{ width: '100%', padding: '8px', fontSize: '14px' }}
              />
              <ErrorMessage name="username" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <Field
                type="email"
                name="email"
                style={{ width: '100%', padding: '8px', fontSize: '14px' }}
              />
              <ErrorMessage name="email" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
              <Field
                type="password"
                name="password"
                style={{ width: '100%', padding: '8px', fontSize: '14px' }}
              />
              <ErrorMessage name="password" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Register with Formik
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;