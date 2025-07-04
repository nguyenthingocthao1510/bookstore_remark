// import {useNavigate} from 'reac'
// const Root = () => {
//     const navigate = useNavigate
// }
import React from 'react'
import { Navigate, useNavigation } from 'react-router-dom'
import { loginRoute } from './routes.contants';

interface Props {

}

export const Root = (props: Props) => {
    const navigate = useNavigation();
    const getRootUrl = () => {
        return loginRoute;
    }

    const url = getRootUrl();

    return (
        <Navigate to={`${url}`} />
    )
}
