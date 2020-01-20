const fields = {
  firstName: { type: "text", name: "firstName", text: "First Name", placeholder: 'Jack', required: true },
  lastName: { type: "text", name: "lastName", text: "Last Name", placeholder: 'Doe', required: true },
  email: { type: "email", name: "email", text: "Email", placeholder: 'jack@mail.com', required: true },
  addressLine: { type: "text", name: "addressLine", text: "Address Line", placeholder: 'Awesome str 9', required: true },
  postalCode: { type: "text", name: "postalCode", text: "Postal Code", placeholder: '12345', required: true },
  city: { type: "text", name: "city", text: "City", placeholder: 'Gothenburg', required: true },
  state: { type: "text", name: "state", text: "State", placeholder: 'Gotaland', required: true },
  dob: { type: "date", name: "dob", text: "Date of Birth", required: true },
  password: { type: "password", name: "password", text: "Password", required: true },
  passwordConfrimation: { type: "password", name: "passwordConfirmation", text: "Password Confirmation", required: true }
}

export const registerForm = [
  fields.firstName,
  fields.lastName,
  fields.email,
  fields.addressLine,
  fields.postalCode,
  fields.state,
  fields.dob,
  fields.password,
  fields.passwordConfrimation
];

export const loginForm = [
  fields.email,
  fields.password
];
