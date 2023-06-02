import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Result from './Result';
import { FormDataContext } from './FormDataContext';

const App = () => {
  const [formData, setFormData] = useState({}); // State to store the form data

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
          <Route path="/step1" element={<Form onSubmit={handleFormSubmit} navigateTo="/step2" />} />
          <Route path="/step2" element={<Form onSubmit={handleFormSubmit} navigateTo="/result" />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </FormDataContext.Provider>
  );
};

export default App;