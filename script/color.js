const display = document.getElementById("display");
const t1List = document.getElementsByClassName("t1");
const btnDisplay = document.getElementById("btnDisplay");
const btnList = document.getElementsByClassName("btnColor");


for(let i=0; i<btnList.length; it++)
{
    btnList[i].addEventListener('click', function(){
        this.style.backgroundColor = this.value;
    })
}

display.addEventListener('click', function(){
    this.style.backgroundColor="green";
})