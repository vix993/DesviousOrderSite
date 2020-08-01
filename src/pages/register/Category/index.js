import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://desvious-order.herokuapp.com/categories';
    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategories([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Category: {values.name}</h1>

      <form onSubmit={function handleSubmit(eventData) {
        eventData.preventDefault();
        setCategories([
          ...categories,
          values
        ]);

        clearForm();
      }}>

        <FormField
          value={values.name}
          onChange={handleChange}
          type="text"
          label="Category Name"
          field="name"
        />
        <FormField
          value={values.description}
          onChange={handleChange}
          type="textarea"
          label="Category Name"
          field="description"
        />
        <FormField
          value={values.color}
          onChange={handleChange}
          type="color"
          label="Category Name"
          field="color"
        />

        {/* <div>
          <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          </label>
        </div>

        <div>
          <label>
          Color:
          <input
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />
          </label>
        </div> */}
        <Button>
          Register
        </Button>
      </form>
      {categories.length === 0 && (<div>
        Loading...
      </div>)}

      <ul>
        {categories.map((category) => {
          return (
            <li key={`${category.title}`}>
              {category.title}
            </li>
          );
        })}
      </ul>
      <Link to="/">
        Home
        </Link>
    </PageDefault>
  );
}

export default RegisterCategory;