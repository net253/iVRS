// Validate email
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Validate password
export const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(String(password));
};

//Validate phone number
export const validatePhone = (phone) => {
  const re = /^[0-9]+$/;
  return re.test(String(phone));
};

// Validate name
export const validateName = (name) => {
  const re = /^[a-zA-Zก-๙]+$/;
  return re.test(String(name));
};

// Validate username
export const validateUsername = (username) => {
  const re = /^[a-zA-Z0-9]{6,30}$/;
  return re.test(String(username));
};

// Validate url
export const validateUrl = (url) => {
  const re = /^(ftp|http|https):\/\/[^ "]+$/;
  return re.test(String(url));
};

// Validate date
export const validateDate = (date) => {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(String(date));
};

// Validate time
export const validateTime = (time) => {
  const re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(String(time));
};

// Validate date time
export const validateDateTime = (dateTime) => {
  const re = /^\d{4}-\d{2}-\d{2}T([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(String(dateTime));
};

// Validate number
export const validateNumber = (number) => {
  const re = /^[0-9]+$/;
  return re.test(String(number));
};

// Validate integer
export const validateInteger = (integer) => {
  const re = /^-?\d+$/;
  return re.test(String(integer));
};

// Validate text
export const validateText = (text) => {
  const re = /^[a-zA-Z0-9 ]{2,30}$/;
  return re.test(String(text));
};

// Validate text with space
export const validateTextWithSpace = (text) => {
  const re = /^[a-zA-Z0-9 ]+$/;
  return re.test(String(text));
};

export const validateThaiText = (text) => {
  const re = /^[ก-๙]+$/;
  return re.test(String(text));
};

// Validate name Thai and English full name
export const validateNameThaiAndEnglish = (name) => {
  const re = /^[a-zA-Zก-๙ ]+$/;
  return re.test(String(name));
};

// Validate NoQuotesInText
export const validateNoQuotesInText = (text) => {
  const re = /^[^'"]*$/;
  return re.test(String(text));
};
