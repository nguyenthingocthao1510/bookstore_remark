type Login = {
    phone_number?: string,
    password?: string,
};

type TLogin = Omit<Login, 'id'>;
type LoginField = keyof Login;
type LoginPick = Pick<Login>;
console.log(LoginPick);

export { Login, TLogin, LoginField, LoginPick}


