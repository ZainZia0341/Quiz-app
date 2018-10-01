function startQuiz(){
    location.href = "./Questions page/Question.html"
}
document.getElementById("close-alert").onclick = function(){
    document.getElementById("popup-alert").className = "alert alert-info popup-alert";
}
var counting = 0;
var score = 0;
function question1(){
    var checkingSelection = false;
    var noOfQuestions = document.getElementsByTagName("input");
    for(i = 0; i < noOfQuestions.length; i++){
        if(noOfQuestions[i].checked){
            counting++;
            var ansValue = noOfQuestions[i].value;
            checkingSelection = true;
            noOfQuestions[i].checked = false;
            if(counting == 1){
                if(ansValue === "The World Wide Web Consortium"){
                    score++;
                    localStorage.setItem("score",score);
                    console.log(score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#2 Choose the correct HTML element for the largest heading:"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<heading>";
                    content[1].lastChild.textContent = "<h1>";
                    content[2].lastChild.textContent = "<h6>";
                    content[3].lastChild.textContent = "<head>";
                    content[0].firstChild.value = "<heading>";
                    content[1].firstChild.value = "<h1>";
                    content[2].firstChild.value = "<h6>";
                    content[3].firstChild.value = "<head>";
            }
            if(counting == 2){
                if(ansValue === "<h1>"){
                    score++;
                    localStorage.setItem("score",score);
                    console.log(score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#3 What does HTML stands for?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "hyper text modern language";
                    content[1].lastChild.textContent = "hyper text markup language";
                    content[2].lastChild.textContent = "hyper text markdown language";
                    content[3].lastChild.textContent = "All of these";
                    content[0].firstChild.value = "hyper text modern language";
                    content[1].firstChild.value = "hyper text markup language";
                    content[2].firstChild.value = "hyper text markdown language";
                    content[3].firstChild.value = "All of these";
            }
            if(counting == 3){
                if(ansValue === "hyper text markup language"){
                    score++;
                    localStorage.setItem("score",score);
                    console.log(score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#4 What is the correct HTML element for inserting a line break?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<lb>";
                    content[1].lastChild.textContent = "<br>";
                    content[2].lastChild.textContent = "<break>";
                    content[3].lastChild.textContent = "All of these";
                    content[0].firstChild.value = "<lb>";
                    content[1].firstChild.value = "<br>";
                    content[2].firstChild.value = "<break>";
                    content[3].firstChild.value = "All of these";
            }
            if(counting == 4){
                if(ansValue === "<br>"){
                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#5 What is the correct HTML for adding a background color?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "background>yellow</background>";
                    content[1].lastChild.textContent = "<body bg='yellow'>";
                    content[2].lastChild.textContent = "<body style='background-color:yellow;'>";
                    content[3].lastChild.textContent = "None of the above";
                    content[0].firstChild.value = "background>yellow</background>";
                    content[1].firstChild.value = "<body bg='yellow'>";
                    content[2].firstChild.value = "<body style='background-color:yellow;'>";
                    content[3].firstChild.value = "None of the above";
            }
            if(counting == 5){
                if(ansValue === "<body style='background-color:yellow;'>"){
                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#6 Choose the correct HTML element to define important text:"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<strong>";
                    content[1].lastChild.textContent = "<i>";
                    content[2].lastChild.textContent = "<important>";
                    content[3].lastChild.textContent = "<b>";
                    content[0].firstChild.value = "<strong>";
                    content[1].firstChild.value = "<i>";
                    content[2].firstChild.value = "<important>";
                    content[3].firstChild.value = "<b>";
            }
            if(counting == 6){
                if(ansValue === "<strong>"){
                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#7 Choose the correct HTML element to define emphasized text:"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<em>";
                    content[1].lastChild.textContent = "<italic>";
                    content[2].lastChild.textContent = "<i>";
                    content[3].lastChild.textContent = "<emphasized>";
                    content[0].firstChild.value = "<em>";
                    content[1].firstChild.value = "<italic>";
                    content[2].firstChild.value = "<i>";
                    content[3].firstChild.value = "<emphasized>";
            }
            if(counting == 7){
                if(ansValue === "<em>"){
                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#8 What is the correct HTML for creating a hyperlink?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<a href='http://www.w3schools.com'>W3Schools</a>";
                    content[1].lastChild.textContent = "<a url='http://www.w3schools.com'>W3Schools.com</a>";
                    content[2].lastChild.textContent = "<a name='http://www.w3schools.com'>W3Schools.com</a>";
                    content[3].lastChild.textContent = "<a>http://www.w3schools.com</a>";
                    content[0].firstChild.value = "<a href='http://www.w3schools.com'>W3Schools</a>";
                    content[1].firstChild.value = "<a url='http://www.w3schools.com'>W3Schools.com</a>";
                    content[2].firstChild.value = "<a name='http://www.w3schools.com'>W3Schools.com</a>";
                    content[3].firstChild.value = "<a>http://www.w3schools.com</a>";
            }
            if(counting == 8){
                if(ansValue === "<a href='http://www.w3schools.com'>W3Schools</a>"){                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#9 Which character is used to indicate an end tag?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<";
                    content[1].lastChild.textContent = "/";
                    content[2].lastChild.textContent = ">";
                    content[3].lastChild.textContent = "*";
                    content[0].firstChild.value = "<";
                    content[1].firstChild.value = "/";
                    content[2].firstChild.value = ">";
                    content[3].firstChild.value = "*";
            }
            if(counting == 9){
                if(ansValue === "/"){
                    score++;
                    localStorage.setItem("score",score);
                }
                    document.getElementsByClassName("Question")[0].innerText = "Q#10 How can you open a link in a new tab/browser window?"
                    var content =  document.getElementsByTagName("label");
                    content[0].lastChild.textContent = "<a href='url' new>";
                    content[1].lastChild.textContent = "<a href='url' target='_blank'>";
                    content[2].lastChild.textContent = "<a href='url' target='new'>";
                    content[3].lastChild.textContent = "none of these";
                    content[0].firstChild.value = "<a href='url' new>";
                    content[1].firstChild.value = "<a href='url' target='_blank'>";
                    content[2].firstChild.value = "<a href='url' target='new'>";
                    content[3].firstChild.value = "none of these";
            }
            if(counting == 10){
                if(ansValue === "<a href='url' target='_blank'>"){
                    score++;
                    localStorage.setItem("score",score);
                }
                location.href = "./Result.html"
                localStorage.getItem("score");
            }
            
        }
    }
    if(checkingSelection === false){
        document.getElementById("popup-alert").className = "alert alert-info";
    }
}