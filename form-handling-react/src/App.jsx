import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.jsx';
import './App.css';

function App() {
  const [showFormik, setShowFormik] = useState(false);

  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => setShowFormik(!showFormik)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
        >
          {showFormik ? 'Show Controlled Form' : 'Show Formik Form'}
        </button>
      </div>

      {showFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;