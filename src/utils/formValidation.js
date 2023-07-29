import { useCallback, useState } from "react";

/*
{
 name: (value) => ({ isValid: true })
 email: (value) => ({ isValid: false, validationMessage: "email should be valid" })
 password: (value) => {}
}
* */

export const validations = {
  name: (value) => {
    if (!value)
      return {
        isValid: false,
        validationMessage: "поле name не должно быть пустым",
      };
    const isValid = /^([a-zA-Z\s\-а-яА-Я])+/.test(value);
    if (isValid) return isValid;
    return {
      isValid,
      validationMessage:
        "поле name должно содержать только латиницу, кириллицу, пробел или дефис",
    };
  },
  email: (value) => {
    if (!value)
      return {
        isValid: false,
        validationMessage: "поле email не должно быть пустым",
      };
    const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    if (isValid) return isValid;
    return {
      isValid,
      validationMessage:
        "поле email должно соответствовать шаблону электронной почты",
    };
  },
  password: (value) => {
    if (!value)
      return {
        isValid: false,
        validationMessage: "поле password не должно быть пустым",
      };
  },
};

export function useFormWithValidation(validationFunctions = validations, initialData = {}) {
  const [values, setValues] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    if (validationFunctions?.[name]) {
      const validationResult = validationFunctions?.[name]?.(value);
      if (validationResult?.isValid === false) {
        setErrors({ ...errors, [name]: validationResult?.validationMessage });
        setIsValid(false);
        return;
      }
    }
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, errors, isValid, resetForm };
}
