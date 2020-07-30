import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative;
    textarea{
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label`
`;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;
    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    transition: .1s ease-in-out;
`;

const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
        border-bottom-color: var(--primarydesvious);
    }

    &:focus:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
    }
    ${function({ hasValue }){
        return hasValue && css`
                &:not([type="color"]) + span {
                    transform: scale(.6) translateY(-10px);
                }
            `;
    }}
`;

function FormField({ value, onChange, type, field }) {
    const fieldId = `id_${field}`;
    const isTextArea = type === 'textarea';
    const tag = isTextArea ? 'textarea' : 'input';
    const hasValue = Boolean(value.length);

    return(
        <FormFieldWrapper>
            <Label
                htmlFor={fieldId}
            >
                <Input
                    as={tag}
                    type={type}
                    name={field}
                    value={value}
                    hasValue={hasValue}
                    onChange={onChange}
                />
                <Label.Text>
                    {field}:
                </Label.Text>
            </Label>
        </FormFieldWrapper>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
};

FormField.propTypes = {
    value: string,
    onChange: PropTypes.func,
    type: string,
    field: string.isRequired, 
};

export default FormField;