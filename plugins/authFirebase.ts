import { initializeApp } from "firebase/app";
interface FirebaseConfig {
    apiKey: string | any,
    authDomain: string | any,
    projectId: string | any,
    storageBucket: string | any,
    messagingSenderId: string | any,
    appId: string | any
}

export default defineNuxtPlugin(nuxtApp => {
    const { public: config } = useRuntimeConfig();
    // Doing something with nuxtApp
    // // Your web app's Firebase configuration
    // const firebaseConfig: FirebaseConfig = {
    //     apiKey: config.FIREBASE_API_KEY,
    //     authDomain: config.FIREBASE_AUTH_DOMAIN,
    //     projectId: config.FIREBASE_PROJECT_ID,
    //     storageBucket: config.FIREBASE_STORAGE_BUCKET,
    //     messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    //     appId: config.FIREBASE_APP_ID
    // };
    
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

})