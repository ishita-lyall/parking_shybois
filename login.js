var firebaseConfig = {
    apiKey: "AIzaSyCqEHCURjJNlcKNgNms_mVrTp6uNcDO41E",
    authDomain: "parking-shybois.firebaseapp.com",
    projectId: "parking-shybois",
    storageBucket: "parking-shybois.appspot.com",
    messagingSenderId: "306274038981",
    appId: "1:306274038981:web:dc8e683fcdaba351b3acac",
    measurementId: "G-7MLR29NEE1"
};
// Initialize Firebase


async function signIn() {
    await firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    var loginMail = document.getElementById('email_id');
    var logPass = document.getElementById('pass_id');
    console.log(loginMail.value);
    console.log(logPass.value);
        try {
            if (await auth.signInWithEmailAndPassword(loginMail.value, logPass.value)) {
                var user = firebase.auth().currentUser;
                if (user != null) {
                    uid = user.email;
                    localStorage.setItem("currentUser", uid);
                   
                    alert("Signed In successfully")
                    location.replace("main.html")
                    console.log(user.email)
                }
            }
        } catch (e) {
            alert(e);
        }
    
}

async function signUp() {
    await firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    var loginMail = document.getElementById('Remail_id');
    var logPass = document.getElementById('Rpass_id');
    var name = document.getElementById('Rname_id');
    console.log(loginMail.value);
    console.log(logPass.value);
        try {
            if (await auth.createUserWithEmailAndPassword(loginMail.value, logPass.value)) {
                var user = firebase.auth().currentUser;
                if (user != null) {
                    uid = user.email;
                    localStorage.setItem("currentUser", uid);
                   
                    alert("Signed Up successfully")
                    location.replace("main.html")
                    console.log(user.email)
                }
            }
        } catch (e) {
            alert(e);
        }
    
}