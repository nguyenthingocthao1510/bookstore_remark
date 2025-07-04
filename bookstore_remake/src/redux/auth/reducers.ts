import { AuthActionTypes } from "./constants";

export const INIT_AUTH_STATE = {
    user: null,
    menus: null,
    permissions: [],
    currentPagePermission: null,
    currentPage: null,
    loading: false,
    error: false,
    value: false,
    userSignUp: false,
    userLoggedIn: false,
    userLogout: false,
    screenLocked: false,
    passwordReset: false,
    passwordChange: false,
    resetPasswordSuccess: null,
    currentPagePermissions: null,
};

interface AuthActionType {
    type: AuthActionTypes.API_RESPONSE_SUCCESS
    | AuthActionTypes.API_RESPONSE_ERROR
    | AuthActionTypes.FORGOT_PASSWORD
    | AuthActionTypes.FORGOT_PASSWORD_CHANGE
    | AuthActionTypes.LOCK_SCREEN
    | AuthActionTypes.LOGIN_USER
    | AuthActionTypes.LOGOUT_USER
    | AuthActionTypes.REDIRECT_PAGE
    | AuthActionTypes.RESET
    | AuthActionTypes.SIGNUP_USER,

    payload: {
        actionType?: string,
        data?: any,
        error?: string,
    }
}

export interface AuthStateTypes {
    user: any,
    menus: any,
    currentPagePermissions: string[] | null,
    currentPage: string | null,
    loading: boolean,
    error: boolean,
    value: boolean,
    userSignUp: boolean,
    userLoggedIn: boolean,
    userLogout: boolean,
    screenLocked: boolean,
    passwordReset: boolean,
    passwordChange: boolean,
    resetPasswordSuccess: string | null,
}

const Auth = (
    state: AuthStateTypes = INIT_AUTH_STATE,
    action: AuthActionType
): any => {
    switch (action.type) {
        case AuthActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        user: action.payload.data?.user || null,
                        menus: action.payload.data?.menus || [],
                        permissions: action.payload.data?.permissions || [],
                        userLoggedIn: true,
                        screenLocked: false,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        user: action.payload.data,
                        userSignup: true,
                        loading: false
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        user: null,
                        loading: false,
                        userLogout: true
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        resetPasswordSuccess: action.payload.data,
                        loading: false,
                        passwordReset: true,
                    };
                }
                case AuthActionTypes.LOCK_SCREEN: {
                    return {
                        ...state,
                        loading: false,
                        screenLocked: true,
                    };
                }
                case AuthActionTypes.REDIRECT_PAGE: {
                    return {
                        ...state,
                        ...action.payload.data,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        user: null,
                        menus: [],
                        permissions: [],
                        error: action.payload.error,
                        userLoggedIn: false,
                        loading: false
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        passwordReset: false,
                    };
                }
                case AuthActionTypes.LOCK_SCREEN: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        screenLocked: false,
                    };
                }
                case AuthActionTypes.REDIRECT_PAGE: {
                    return {
                        ...state,
                        currentPagePermissions: [],
                        currentPage: null,
                    };
                }
                default:
                    return { ...state };
            }
        case AuthActionTypes.LOGIN_USER:
            return { ...state, loading: true, userLoggedIn: false };
        case AuthActionTypes.LOGOUT_USER:
            return { ...state, user: null, menus: [], permissions: [], userLogOut: false, userLoggedIn: false };
        case AuthActionTypes.LOCK_SCREEN:
            return { ...state, loading: true, screenLocked: false };
        case AuthActionTypes.RESET:
            return { ...state, ...INIT_AUTH_STATE };
        case AuthActionTypes.REDIRECT_PAGE:
            return { ...state, currentPagePermission: [], currentPage: null };
        default:
            return { ...state };
    }
};

export default Auth;