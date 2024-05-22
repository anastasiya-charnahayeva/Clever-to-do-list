<template>
    <div>
      <h2>Login</h2>
      <span v-if="currentUser"> Welcome {{ currentUser.displayName }}</span>
      <span v-else><div id="firebaseui-auth-container"></div></span>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
  import * as firebaseui from 'firebaseui'
  import 'firebaseui/dist/firebaseui.css'
  import { useCurrentUser } from 'vuefire';

  const currentUser = useCurrentUser()
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(useFirebaseAuth());  
  const config = {
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/",
    callbacks: {
      signInSuccessWithAuthResult(data: any): void | any {
        console.log("Successfully signed in", data);
      },
    },
  }
  
  onMounted(() => {
    ui.start("#firebaseui-auth-container", config);
  })
  
</script>