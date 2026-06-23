export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateMobile = (mobile: string) => {
  return /^[0-9]{10}$/.test(mobile);
};

export const validateUsername = (username: string) => {
  return /^[a-zA-Z0-9_]+$/.test(username);
};

export const validateName = (name: string) => {
  return /^[A-Za-z ]+$/.test(name.trim());
};