import React from 'react';


function FormField({ value, onChange, type, field }) {
    return(
        <div>
            <label>
                {field}:
                <input
                    type={type}
                    name={field}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
export default FormField;