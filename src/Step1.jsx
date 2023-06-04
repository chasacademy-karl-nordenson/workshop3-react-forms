import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  firstName: yup.string().required('First name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const Step1 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    navigate('/step2');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        label="Name"
        type="text"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="First Name"
        type="text"
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Email"
        type="text"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Button type="submit" variant="contained">
        Next
      </Button>
    </form>
  );
};

export default Step1;