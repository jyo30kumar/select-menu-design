let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");

selectField.onclick = function(){
    document.getElementById("list").classList.toggle("hide");
    document.getElementById("arrow").classList.toggle("rotate");
}

for(option of options){
    option.onclick = function(){
        selectText.textContent = this.textContent;
        document.getElementById("list").classList.toggle("hide");
    }
}