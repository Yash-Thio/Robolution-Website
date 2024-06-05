import { selector } from "recoil";
import { isLogin } from "../Atoms/Islogin";
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from '@/Types/jwt';

export const isAdmin = selector({
    key: "isAdmin",
    get: ({get})=>{
        const login = get(isLogin);
        if(login){
            const token = localStorage.getItem("jwt");
            if(token){
                const decodedToken = jwtDecode<CustomJwtPayload>(token);
                return decodedToken.isAdmin;
            }
        }
    }
})