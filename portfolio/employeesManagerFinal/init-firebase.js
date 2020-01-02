var firebaseConfig =  {
	apiKey: "AIzaSyAi5uUBAii1Z5gli5Y5cKdORR6f4IIjtn8",
    authDomain: "vuefs-prod-d70e7.firebaseapp.com",
    databaseURL: "https://vuefs-prod-d70e7.firebaseio.com",
    projectId: "vuefs-prod-d70e7",
    storageBucket: "vuefs-prod-d70e7.appspot.com",
    messagingSenderId: "622591689516",
    appId: "1:622591689516:web:8e25a2e1ca8fd0c2e52289",
    measurementId: "G-2YLTZ3XBN1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
