export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email";
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value.trim()) return `${fieldName} is required`;
  return null;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "");
};
