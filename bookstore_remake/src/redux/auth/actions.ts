import { AuthActionTypes } from './constants';

export interface AuthActionType {
    type:
    | AuthActionTypes.API_RESPONSE_ERROR
    | AuthActionTypes.API_RESPONSE_SUCCESS
    | AuthActionTypes.FORGOT_PASSWORD
    | AuthActionTypes.FORGOT_PASSWORD_CHANGE
    | AuthActionTypes.LOCK_SCREEN
    | AuthActionTypes.LOGIN_USER
    | AuthActionTypes.REDIRECT_PAGE
    | AuthActionTypes.RESET
    | AuthActionTypes.LOGOUT_USER
    | AuthActionTypes.SIGNUP_USER;

    payload: object | string;
}

export const authApiResponseSuccess = (
    actionType: string,
    data: any,
): AuthActionType => ({
    type: AuthActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const loginUser = (username: string, password: string): AuthActionType => ({
    type: AuthActionTypes.LOGIN_USER,
    payload: { username, password }
});

export const redirectPage = (nextPage: string | null): AuthActionType => ({
    type: AuthActionTypes.REDIRECT_PAGE,
    payload: { nextPage }
});

export const signupUser = (data: any): AuthActionType => ({
    type: AuthActionTypes.SIGNUP_USER,
    payload: { data }
});

export const logoutUser = (): AuthActionType => ({
    type: AuthActionTypes.LOGOUT_USER,
    payload: {}
});

export const forgotPassword = (emailAddress: string): AuthActionType => ({
    type: AuthActionTypes.FORGOT_PASSWORD,
    payload: { emailAddress }
});

export const resetAuth = (): AuthActionType => ({
    type: AuthActionTypes.RESET,
    payload: {}
});

export const lockScreen = (): AuthActionType => ({
    type: AuthActionTypes.LOCK_SCREEN,
    payload: {}
}); 