type Register = {
  id?: string,
  phone_number?: string,
  password?: string,
  confirm_password?: string,
};

type TRegister = Omit<Register, 'id'>;
type RegisterField = keyof Register;
type RegisterPick = Pick<Register>;

export {Register,TRegister,RegisterField, RegisterPick};