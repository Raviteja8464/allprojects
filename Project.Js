/*
let firstloginpage = document.getElementById("first-login-page");

*/
let firstLoginPageEle = document.getElementById("first-login-page")
let authrizationPageEle = document.getElementById("authrization-page")
let loginformpageEle = document.getElementById("login-form");
let signUppageELe = document.getElementById("signUp-form");
 /* ********* first page Hide and Display ****************8 */

 let firstpageButtonEle = document.getElementById("first-page-button");
 firstpageButtonEle.onclick = function(){
    firstLoginPageEle.style.display = "none"
    authrizationPageEle.style.display = "flex"
 }

/* login page hide and display */
let signupButtonEle = document.getElementById("signUp-Button")
signupButtonEle.onclick = function() {
    loginformpageEle.style.display = "none"
    signUppageELe.style.display = "flex"
}
/* ******* Home page Hide and display **********    */
let logoutbtnEle = document.getElementById("logoutButtonId")
let allapppageaEle = document.getElementById("allApplicationPageId")
logoutbtnEle.onclick = function(){
    allapppageaEle.style.display = "none"
    firstLoginPageEle.style.display = "flex"
}
/* ************************ login page Start******************* */
let usernameELe = document.getElementById("userName")
let userpassELe = document.getElementById("userPassword")
let usercaptchaELe = document.getElementById("userCaptcha")
let inputcaptchaELe = document.getElementById("inputCaptcha")
let btnloginELe = document.getElementById("formLogin")
let retryEle = document.getElementById("retrybtn")
let usererrorEle = document.getElementById("usererror")
let passerrorEle = document.getElementById("userpasserror")
let captchaerrorEle = document.getElementById("captchaError")

let homePageUsername = document.getElementById("homeUsernameId");

function createCaptcha() {
    let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numLetters = "0123456789";

    let randomCapital = capLetters[Math.round(Math.random() * (26-1))];
    let randomCapital2 = capLetters[Math.round(Math.random() * (26-1))];
    //console.log(randomCapital)
    let randomsmall = smallLetter[Math.round(Math.random() * (26-1))];
    //console.log(randomsmall)
    let randomnumber = numLetters[(Math.round(Math.random() * (10-1)))];
    let randomnumber2 = numLetters[(Math.round(Math.random() * (10-1)))];
    //console.log(randomnumber)
    let totalstring = randomCapital + randomnumber + randomsmall + randomCapital2 + randomnumber2
    //console.log(totalstring)
    usercaptchaELe.textContent = totalstring
    return totalstring;
    
}

retryEle.onclick = function() {
    createCaptcha()
}
createCaptcha()
btnloginELe.onclick = function () {
    if (usernameELe.value === ""){
        usererrorEle.textContent = "*Required"
        passerrorEle.textContent = ""
        captchaerrorEle.textContent = ""

    }
    else if (userpassELe.value === ""){
        passerrorEle.textContent = "*Required"
        usererrorEle.textContent = "";
        captchaerrorEle.textContent = ""

    }
    else if (inputcaptchaELe.value === ""){
        captchaerrorEle.textContent = "*Required"
        usererrorEle.textContent = ""
        passerrorEle.textContent = ""
    }
    else {
        if (usercaptchaELe.textContent === inputcaptchaELe.value){
            /* login to home page  enter code here*/
            allapppageaEle.style.display = "flex";
            authrizationPageEle.style.display = "none"
            
            usererrorEle.textContent = ""
            passerrorEle.textContent = ""
            captchaerrorEle.textContent = ""
            
            let homepagename = usernameELe.value
            homePageUsername.textContent = homepagename

            inputcaptchaELe.value =""
            createCaptcha()
            
        }
        else {
            captchaerrorEle.textContent = "Invalid Captcha";
            usererrorEle.textContent = ""
            passerrorEle.textContent = ""
        }
        
    }
}
/* ********* SIGNUP PAGE ************** */
let userELe = document.getElementById("userName1")
let emailELe = document.getElementById("emailId")
let phoneELe = document.getElementById("phonenumberId")
let signpassELe = document.getElementById("password1")
let signpass2ELe = document.getElementById("password2")
let signcaptchaELe = document.getElementById("userCapcthaId")

let usererrELe = document.getElementById("usererrELeId")
let emailerrELe = document.getElementById("emailerrELeId")
let phoneerrELe = document.getElementById("phoneerrELeId")
let signpasserrELe = document.getElementById("signpasserrELeId")
let signpass2errELe = document.getElementById("signpass2errELeId")
let signcaptchaerrELe = document.getElementById("signcaptchaerrELeId")
let successEle = document.getElementById("successId")

let signupcaptcha = document.getElementById("signCaptcha")
let newcaptchabtn = document.getElementById("retrybtn2")
let signUpbtn = document.getElementById("signUpLogin")


signUpbtn.onclick = function() {
    if (userELe.value === ""){
        usererrELe.textContent = "*Required"
        emailerrELe.textContent = "";
        phoneerrELe.textContent = "";
        signpasserrELe.textContent = "";
        signpass2errELe.textContent = "";
        signcaptchaerrELe.textContent = "";
    }
    else if (emailELe.value === ""){
        emailerrELe.textContent = "*Required";
        usererrELe.textContent = ""
        
        phoneerrELe.textContent = "";
        signpasserrELe.textContent = "";
        signpass2errELe.textContent = "";
        signcaptchaerrELe.textContent = "";
    }
    else if (phoneELe.value === ""){
        phoneerrELe.textContent = "*Required";
        usererrELe.textContent = ""
        emailerrELe.textContent = "";
        signpasserrELe.textContent = "";
        signpass2errELe.textContent = "";
        signcaptchaerrELe.textContent = "";
    }
    else if (signpassELe.value === ""){
        signpasserrELe.textContent = "*Required";
        emailerrELe.textContent = "";
        usererrELe.textContent = ""
        emailerrELe.textContent = "";
        phoneerrELe.textContent = "";
        signpass2errELe.textContent = "";
        signcaptchaerrELe.textContent = "";
    }
    else if (signpass2ELe.value === ""){
        signpass2errELe.textContent = "*Required";
        emailerrELe.textContent = "";
        usererrELe.textContent = ""
        emailerrELe.textContent = "";
        phoneerrELe.textContent = "";
        signpasserrELe.textContent = "";
        
        signcaptchaerrELe.textContent = "";
    }
    else if (signcaptchaELe.value === ""){
        signcaptchaerrELe.textContent = "*Required";
        emailerrELe.textContent = "";
        usererrELe.textContent = ""
        emailerrELe.textContent = "";
        phoneerrELe.textContent = "";
        signpasserrELe.textContent = "";
        signpass2errELe.textContent = "";
        
    }
    else {
        if (signupcaptcha.textContent === signcaptchaELe.value){
            successEle.textContent = "Account create succesfully.Please Login..";
            
            signcaptchaerrELe.textContent = "";
            emailerrELe.textContent = "";
            usererrELe.textContent = ""
            emailerrELe.textContent = "";
            phoneerrELe.textContent = "";
            signpasserrELe.textContent = "";
            signpass2errELe.textContent = "";
        }
        else {
            successEle.textContent = "Invalid Captcha";
        }
    }
    
}
newcaptchabtn.onclick = function() {
    createCaptcha2()
}
function createCaptcha2() {
    let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numLetters = "0123456789";

    let randomCapital = capLetters[Math.round(Math.random() * (26-1))];
    let randomCapital2 = capLetters[Math.round(Math.random() * (26-1))];
    //console.log(randomCapital)
    let randomsmall = smallLetter[Math.round(Math.random() * (26-1))];
    //console.log(randomsmall)
    let randomnumber = numLetters[(Math.round(Math.random() * (10-1)))];
    let randomnumber2 = numLetters[(Math.round(Math.random() * (10-1)))];
    //console.log(randomnumber)
    let totalstring = randomCapital + randomnumber + randomsmall + randomCapital2 + randomnumber2
    //console.log(totalstring)
    signupcaptcha.textContent = totalstring
    
    
}
createCaptcha2()
/* ******* sign up page hide and Display functionallity ************* */
let signuppageloginButton = document.getElementById("gotoLoginPage");
let signuppageloginBtncrossmark = document.getElementById("signuppageCrossMark")
signuppageloginButton.onclick = function(){
    signUppageELe.style.display = "none"
    loginformpageEle.style.display = "flex";
    userELe.value = ""
    emailELe.value = ""
    phoneELe.value = ""
    signpassELe.value = ""
    signpass2ELe.value = ""
    signcaptchaELe.value = ""
    successEle.textContent = ""
}
signuppageloginBtncrossmark.onclick = function(){
    signUppageELe.style.display = "none"
    loginformpageEle.style.display = "flex"
    userELe.value = ""
    emailELe.value = ""
    phoneELe.value = ""
    signpassELe.value = ""
    signpass2ELe.value = ""
    signcaptchaELe.value = ""
    successEle.textContent = ""
}
/* ********************** Sign Up END *************************** */
/* *************** Home Page Start **************** */
/* ***** wikipedia **** */
let resultsEle = document.getElementById("wikipediaData");
let inputSearchEle = document.getElementById("searchInput");

let spinnerEle = document.getElementById("spinner");

function createASinglePage(single) {
    
    let divEle = document.createElement("div");
    divEle.classList.add("wikipedia-data")
    resultsEle.appendChild(divEle)

    let anchorEle = document.createElement("a");
    anchorEle.textContent = single.title
    anchorEle.href = single.link;
    anchorEle.target = "_blank"
    anchorEle.classList.add("result-title");
    divEle.appendChild(anchorEle);

    let lineEle = document.createElement("br");
    divEle.appendChild(lineEle);

    let anchorEle2 = document.createElement("a");
    anchorEle2.textContent = single.link;
    anchorEle2.href = single.link;

    anchorEle2.classList.add("result-url");
    divEle.appendChild(anchorEle2);

    let paraEle = document.createElement("p");
    paraEle.textContent = single.description;
    paraEle.classList.add("link-description");
    divEle.appendChild(paraEle)


}

function itratingSingle(results) {

    for (let single of results) {
        createASinglePage(single)

    }



}

function httpRequest(event) {
    if (event.key === "Enter") {
        resultsEle.textContent = "";
        let options = {
            method: "GET",
        }
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputSearchEle.value;
        spinnerEle.classList.remove("d-none");
        resultsEle.classList.add("d-none")

        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                spinnerEle.classList.add("d-none");
                resultsEle.classList.remove("d-none")
                console.log(jsonData)
                let results = jsonData.search_results
                itratingSingle(results)
            })
    }
}
inputSearchEle.addEventListener("keydown", httpRequest)

