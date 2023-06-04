import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';

const Result = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <div>
      <h2>Results</h2>
      <p>Name: {formData.name}</p>
      <p>First Name: {formData.firstName}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>
      <p>ZIP Code: {formData.zipCode}</p>
      <p>Place: {formData.place}</p>
      <p>Phone: {formData.phone}</p>
      <p>Accept Privacy Policy: {formData.acceptPrivacyPolicy ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Result;