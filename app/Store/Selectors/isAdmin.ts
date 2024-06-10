import { selector } from 'recoil';
import { isLogin } from '../Atoms/Islogin';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from '@/Types/jwt';

export const isAdmin = selector<boolean | null>({
  key: 'isAdmin',
  get: ({ get }) => {
    const login = get(isLogin);
    if (login) {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          const decodedToken = jwtDecode<CustomJwtPayload>(token);
          return decodedToken.isAdmin;
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      }
    }
    return null;
  },
});
