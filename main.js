const auth = firebase.auth();
var database = firebase.database;
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {
    alert("Data has been sent");
    //var messageText = mainText.value;
    firebase.child("Text").set("hi");

}


function retrieve(username)
{
    var results = "";
    var ref = database().ref("users");
    ref.orderByChild("username").equalTo(username).on("value", function(snapshot){
        results = snapshot.val();

    });
    console.log(results["John"]["username"]);
}
function check()
{
    var email = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}

function signup(email, password)
{
    var promise = auth.createUserWithEmailAndPassword(document.getElementById("user").value,document.getElementById("password").value );
    promise.catch(e => console.log(e.message));
}
function message()
{
    alert("foolish mortal, you dare test me?" );
}
function logout()
{
    message();


  setTimeout(auth.signOut(),3000) ;
}


function redirect()
{
    window.location = "htmlpage3.html";
}




auth.onAuthStateChanged(function(user) {
    if(user){
        const filename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        console.log(user);
        if(filename !== 'htmlpage2.html')
        {
            window.location = "htmlpage2.html";
        }
    }
    else {
        const filename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        console.log('not logged in');
        if(filename !== 'index.html')
        {
            window.location = "index.html";
        }

    }

});
