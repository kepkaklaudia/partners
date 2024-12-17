export const validateEmail = (value: string): boolean | string => {
  if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value) || value.trim() === "") {
    return true;
  }
  return "Nieprawidłowy adres e-mail";
};
