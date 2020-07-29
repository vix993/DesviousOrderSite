import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function fieldEdit(key, value){
    setValues({
      ...values,
      [key]: value,
    }); 
  }

  function handleChange(eventData){
    const { value } = eventData.target;
    fieldEdit(
     eventData.target.getAttribute('name'),
     value
    );
  }

  return (
    <PageDefault>
      <h1>Category: { values.name }</h1>

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
       type="text"
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
      <FormField
       value={values.color}
       onChange={handleChange}
       type="href"
       field="Link"
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
        <button>
          Register
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
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