import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';

const schema = yup.object().shape({
  address: yup.string().required('Address is required'),
  zipCode: yup.string().required('ZIP code is required'),
  place: yup.string().required('Place is required'),
  phone: yup.string().required('Phone is required'),
  acceptPrivacyPolicy: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
});

const Step2 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    navigate('/result');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        label="Address"
        type="text"
        {...register('address')}
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <TextField
        label="ZIP Code"
        type="text"
        {...register('zipCode')}
        error={!!errors.zipCode}
        helperText={errors.zipCode?.message}
      />
      <TextField
        label="Place"
        type="text"
        {...register('place')}
        error={!!errors.place}
        helperText={errors.place?.message}
      />
      <TextField
        label="Phone"
        type="text"
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Accept Privacy Policy"
        type="checkbox"
        {...register('acceptPrivacyPolicy')}
        error={!!errors.acceptPrivacyPolicy}
        helperText={errors.acceptPrivacyPolicy?.message}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Step2;