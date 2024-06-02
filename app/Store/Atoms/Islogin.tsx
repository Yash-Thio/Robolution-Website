import { atom } from 'recoil';

const getInitialLoginState = () => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('jwt');
  }
  return false;
};

export const isLogin = atom<boolean>({
  key: 'isLogin',
  default: getInitialLoginState(),
});