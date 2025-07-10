type Login = {
    phone_number?: string,
    password?: string,
};

type TLogin = Omit<Login, 'id'>;
type LoginField = keyof Login;
type LoginPick = Pick<Login>;

export { Login, TLogin, LoginField, LoginPick}


