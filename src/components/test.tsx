import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests
import { TestInputType } from './types/TestTypes'; // Define the input type for the test

interface WriteTestsFormProps {
  onSubmit: (data: TestInputType) => void;
}

const WriteTests: React.FC<WriteTestsFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TestInputType>();

  const [createTestMutation] = useMutation(CREATE_TEST);

  const handleFormSubmit: SubmitHandler<TestInputType> = async (data) => {
    try {
      setLoading(true);
      await createTestMutation({ variables: { input: data } });
      onSubmit(data);
    } catch (error) {
      console.error('Error creating test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 bg-white rounded shadow-md">
      {/* Example input fields */}
      <div className="mb-4">
        <label htmlFor="testName" className="block text-sm font-medium text-gray-700">Test Name</label>
        <input
          id="testName"
          type="text"
          {...register('name', { required: 'This field is required' })}
          aria-label="Enter test name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && <p role="alert" className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      
      {/* Add more fields as necessary */}
      
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Loading...' : 'Submit Test'}
      </button>
    </form>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests
import { TestInputType } from './types/TestTypes'; // Define the input type for the test

interface WriteTestsFormProps {
  onSubmit: (data: TestInputType) => void;
}

const WriteTests: React.FC<WriteTestsFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TestInputType>();

  const [createTestMutation] = useMutation(CREATE_TEST);

  const handleFormSubmit: SubmitHandler<TestInputType> = async (data) => {
    try {
      setLoading(true);
      await createTestMutation({ variables: { input: data } });
      onSubmit(data);
    } catch (error) {
      console.error('Error creating test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 bg-white rounded shadow-md">
      {/* Example input fields */}
      <div className="mb-4">
        <label htmlFor="testName" className="block text-sm font-medium text-gray-700">Test Name</label>
        <input
          id="testName"
          type="text"
          {...register('name', { required: 'This field is required' })}
          aria-label="Enter test name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && <p role="alert" className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      
      {/* Add more fields as necessary */}
      
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Loading...' : 'Submit Test'}
      </button>
    </form>
  );
};

export default WriteTests;