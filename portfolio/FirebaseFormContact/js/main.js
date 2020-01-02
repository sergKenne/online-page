

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAps8KFmOzRaAwUgx7129nKw6M6zq0R6XQ",
    authDomain: "form-contact-a36bb.firebaseapp.com",
    databaseURL: "https://form-contact-a36bb.firebaseio.com",
    projectId: "form-contact-a36bb",
    storageBucket: "form-contact-a36bb.appspot.com",
    messagingSenderId: "337775154539",
    appId: "1:337775154539:web:770c5a5c982ac5aff3a82e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference message collection

  var db = firebase.firestore();


document.querySelector("#formInput").addEventListener("submit",submitForm );


function getInputValue(id) {

	return document.getElementById(id).value;
}

function showMessage(className){
	var div = document.getElementById(className);
	div.style.display = "block";

	setTimeout( () => div.style.display = "none",3000);
	
}



function submitForm(e) {
	e.preventDefault();

	var name = getInputValue("name");
	var company = getInputValue("company");
	var email = getInputValue("email");
	var phone = getInputValue("phone");
	var message = getInputValue("message");

	if( name === "" || email === "" || email === "" || phone ==="" || message === "") {
		showMessage("danger");
	} else {

		saveMessage(name, company, email, phone, message);
		clearFieldsInput();
		showMessage("success");

	}
	
}


function saveMessage(name, company, email, phone, message) {

	db.collection("messages").add({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	})
	.then( function(docRef) {
		console.log("Document written width ID", docRef);
	})
	.catch(function(error) {
		console.log("Error adding document: ", error);
	});

}


function clearFieldsInput() {
	document.querySelector("#formInput").reset();
}

function getData() {
	db.collection("messages").get().then( querySnapshot => {
		querySnapshot.forEach( doc => {
			// console.log( doc.id );
			var dataList = document.querySelector(".dataList");
			var innerDiv = document.createElement("div");
			innerDiv.className = "email";
			innerDiv.innerHTML = ` 
				<p>Name: <span>${doc.data().name}</span></p>
				<p>Email Address: <span>${doc.data().email}</span></p>
	            <p>Company: <span>${doc.data().company}</span></p>
	            <p>Phone Number: <span>${doc.data().phone}</span></p>
	            <p>Message: <span>${doc.data().message}</span></p>
			`;
			
			dataList.appendChild(innerDiv);
		});
	});
}




//Toggle Content


document.querySelector(".getForm").addEventListener("click", function(){
	document.getElementById("headTitle").innerHTML = "Email Us";
	this.classList.add("active");
	document.querySelector(".getEmail").classList.remove("active");

	document.querySelector(".contact .formInput").style.display = "grid";
	document.querySelector(".contact .dataList").style.display = "none";
});



document.querySelector(".getEmail").addEventListener("click", function(){ 

	document.getElementById("headTitle").innerHTML = "List of Emails";

	this.classList.add("active");
	document.querySelector(".getForm").classList.remove("active");

	document.querySelector(".contact .formInput").style.display = "none";
	document.querySelector(".contact .dataList").style.display = "block";



	new Promise((resolve, rejet) => {

		elmt = document.querySelectorAll(".email");
		elmt.forEach( el => el.remove() );
		resolve();
	}).then(() => clearElements() ).then( () =>  getData() );



	// getData();

});


function clearElements() {
	elmt = document.querySelectorAll(".email");
	elmt.forEach( el => el.remove() );
}
