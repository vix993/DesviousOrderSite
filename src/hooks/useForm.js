import { useState } from 'react';  

function useForm(initialValues) {
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
  
    function clearForm() {
      setValues(initialValues);
    }
  
    return {
      values,
      handleChange,
      clearForm,
    }
  }

  export default useForm;