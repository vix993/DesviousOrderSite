import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function RegisterVideo() {
  const initialValues = {
    title: '',
    link: '',
  }
  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(initialValues);

  function fieldEdit(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleChange(eventData) {
    const { value } = eventData.target;
    fieldEdit(
      eventData.target.getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Register Video</h1>
      <form onSubmit={function handleSubmit(eventData) {
        eventData.preventDefault();
        setVideos([
          ...videos,
          values
        ]);

        setValues(initialValues);
      }}></form>
      <FormField
        value={values.title}
        onChange={handleChange}
        type="text"
        label="Category Name"
        field="title"
      />
      <FormField
        value={values.link}
        onChange={handleChange}
        type="text"
        label="Category Name"
        field="link"
      />
      <Link to="/register/category">
        Register Category
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;