import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      // Jika pesan error adalah "jwt expired"
      if (message === "jwt expired") {
        Cookies.remove('token'); // Hapus token dari cookies
        if (typeof window !== 'undefined') {
          // Menggunakan redirect client-side
          window.location.href = '/signin';
        }
        return;
      }
      
      return Promise.reject(error); //akan diteruskan ke catch si pemanggil function
    }
  }
}