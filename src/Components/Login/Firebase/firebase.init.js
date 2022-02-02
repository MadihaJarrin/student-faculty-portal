import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;

/* steps for authentication

step-1:
1. firebase:crete project 
2. create web app 
3. get configuration (firebase.config.js & .env.local)
4. initialize firebase (firebase.init.js )
5. enable auth method 

step-2
1. create login component
2. create register component 
3. create route for login and register

step-3 (useFirebase.js )
1. set up sign in method 
2. set up sign out method 
3. user state 
4. special observer 
5. return necessary method and states from useFirebase 

step-4 (AuthProvider.js)
1. create a auth context 
2. create context provider 
3. set context provider context value 
4. use auth provider in the app js
5. create useAuth Hook (useFirebase)


step-5 (Create private route)
1. create private route
2. set private route

step-6 (redirect after login)
1. after login redirect user to their desire destination

*/

