import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<object>()

  async function createUser(values: {email: string, password: string}) {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    user.value = userCredential.user
  }

  async function signInUser(values:  {email: string, password: string}) {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
    console.log('userCreds', userCredential.user)
    user.value = userCredential.user
    
    localStorage.setItem("access_token", userCredential.user?.accessToken)
  }

  async function signOutUser() {
    const auth = getAuth()
    await signOut(auth)
    user.value = null
    localStorage.removeItem("access_token")
  }

  return {
    user,
    createUser,
    signInUser,
    signOutUser,
  }
}, {
  persist: true,
})
