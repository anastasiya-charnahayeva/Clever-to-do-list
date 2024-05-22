import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    type User,
  } from 'firebase/auth'
  
  export const useAuthStore = defineStore('auth', () => {
    const credentials = ref<User | undefined | any>()
  
    const createUser = async (email: string, password: string, username: string) => {
      const auth = getAuth();
      credentials.value = await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return credentials;
      
    }
     
    const login = async (email: string, password: string) => {
        const auth = getAuth();
        credentials.value = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        return credentials;
        
      }
      
    return {
      createUser,
      login,
      credentials
    }
  })