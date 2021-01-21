var isEnableNameInput = false;
var isEnableEmailAddressInput = false;
var isDisplayInvalidNameInput = false;
var isDisplayInvalidEmailInput = false;
var isEnableDataSubmitButton = false;
var isDisplayDataSubmitMsg = false;
var isDisplaySuccessSubmitMsg = false;


function generateLINode(text){
    var node = document.createElement("li"); 
    node.innerHTML = text;
    return node;
}

document.addEventListener("DOMContentLoaded", function(event) {
    var nameInputDom = document.getElementById("name");
    var emailInputDom = document.getElementById("email");
    var stateTextUlDom = document.getElementById("state-text-ul");
    var submitButtonDom = document.getElementById("submit-button"); 

    var nameErrorMsgDom = document.getElementById("name-error-msg");
    var emailErrorMsgDom = document.getElementById("email-error-msg");

    var submitDataMsgDom = document.getElementById("data-submit-msg");
    var successSubmitMsgDom = document.getElementById("success-submit-msg");

    stateTextUlDom.appendChild(generateLINode(`Set state of name input to opened`));
   

    nameInputDom.addEventListener("blur",function(){
        var nameInputDomValue = nameInputDom.value;
        if(nameInputDomValue.length > 0){
            isEnableNameInput = false;
            isEnableEmailAddressInput = true;
            stateTextUlDom.appendChild(generateLINode(`Set state of name input to closed`));
            stateTextUlDom.appendChild(generateLINode(`Set state of email address input to opened`));
            if(isDisplayInvalidNameInput){
                stateTextUlDom.appendChild(generateLINode(`Set state to hide invalid name Error Message.`));
                isDisplayInvalidNameInput = false;
            }
        }else {
            isDisplayInvalidNameInput = true;
            stateTextUlDom.appendChild(generateLINode(`Set state to display invalid name Error Message.`));
        }
    });

    emailInputDom.addEventListener("blur",function(){
        var emailInputDomValue = emailInputDom.value;
        if(emailInputDomValue.length > 0){
            isEnableEmailAddressInput = false;
            stateTextUlDom.appendChild(generateLINode(`Set state of email address input to closed`));
            if(isDisplayInvalidEmailInput){
                stateTextUlDom.appendChild(generateLINode(`Set state to hide invalid email Error Message.`));
                isDisplayInvalidEmailInput = false;
            }
            isEnableDataSubmitButton = true;
            stateTextUlDom.appendChild(generateLINode(`Set state to enable data submit Button.`));
        }else {
            isDisplayInvalidEmailInput = true;
            stateTextUlDom.appendChild(generateLINode(`Set state to display invalid email Error Message.`));
        }
    });

    submitButtonDom.addEventListener("click",function(){
        isEnableDataSubmitButton = false;
        isDisplayDataSubmitMsg = true;
        stateTextUlDom.appendChild(generateLINode(`Set state to disable data submit Button.`));
        stateTextUlDom.appendChild(generateLINode(`Set state to display data submit Message.`));
        setTimeout(()=>{
            isDisplayDataSubmitMsg = false;
            isDisplaySuccessSubmitMsg = true;
            stateTextUlDom.appendChild(generateLINode(`Set state to hide data submit Message.`));
            stateTextUlDom.appendChild(generateLINode(`Set state to display data submit success Message.`));
        },2000);
    });
   
    
    isEnableNameInput = true;
    

    setInterval(()=>{
        nameInputDom.disabled=!(isEnableNameInput);
        emailInputDom.disabled=!(isEnableEmailAddressInput);
        submitButtonDom.disabled=!(isEnableDataSubmitButton);
        
        if(isDisplayInvalidNameInput){
            nameErrorMsgDom.style.display = "block";
        }else {
            nameErrorMsgDom.style.display = "none";
        }

        if(isDisplayInvalidEmailInput){
            emailErrorMsgDom.style.display = "block";
        }else {
            emailErrorMsgDom.style.display = "none";
        }

        if(isDisplayDataSubmitMsg){
            submitDataMsgDom.style.display = "block";
        }else {
            submitDataMsgDom.style.display = "none";
        }

        if(isDisplaySuccessSubmitMsg){
            successSubmitMsgDom.style.display = "block";
        }else {
            successSubmitMsgDom.style.display = "none";
        }

        
    },500);
});
