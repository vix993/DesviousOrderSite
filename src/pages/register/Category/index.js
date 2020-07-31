import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
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
    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
    //     {
    //       "id": 1,
    //       "name": "some stuff",
    //       "description": "blog post maybe",
    //       "cor": "#cbd1ff"
    //   },
    //   {
    //       "id": 1,
    //       "name": "some other stuff",
    //       "description": "some other blog post maybe",
    //       "cor": "#cbd1ff"
    //   },
    //   ]);
    // }, 1 * 1000);
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

        setValues(initialValues);
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
            <li key={`${category.name}`}>
              {category.name}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Home
        </Link>
    </PageDefault>
  );
}

export default RegisterCategory;