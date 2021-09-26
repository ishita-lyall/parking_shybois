// import showPosition from '../parking/listspot.html'
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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var lant;
var long;
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
                    location.replace("page1.html")
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

async function checker() {
    await firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    location.replace("listspot.html")
      
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    lant=position.coords.latitude;
    long=position.coords.longitude;
  }

async function uploadspot() {
    var area = document.getElementById("area_id")
    var spots = document.getElementById("spots_id")
    showPosition();
    db.collection("parking").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
}

