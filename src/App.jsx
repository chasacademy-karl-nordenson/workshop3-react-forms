import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Result from './Result';
import { FormDataContext } from './FormDataContext';

const App = () => {
  const [formData, setFormData] = useState({}); 
  const handleFormSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormDataContext.Provider value={{ formData }}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/step1">Step 1</Link>
            </li>
            <li>
              <Link to="/step2">Step 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/step1" element={<Step1 onSubmit={handleFormSubmit} />} />
          <Route path="/step2" element={<Step2 onSubmit={handleFormSubmit} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </FormDataContext.Provider>
  );
};

export default App;