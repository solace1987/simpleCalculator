function values(value){
   value=this.value;
   displayControl(value);
 }

function important (){var keys=document.querySelectorAll("#num");
                      var display= document.querySelector("#display p");
for (var i=0;i<keys.length;i++){
    keys[i].addEventListener("click", values);

}}
document.addEventListener('DOMContentLoaded',important, false);
var container=[];
var test=[];
var screenContent=false;


function displayControl(input){
  var content=document.querySelector("#display p").textContent;
  var operator =["#","-","*","/","+"]
      
  
  if (operator.indexOf(input)<1 && screenContent==false){
   document.querySelector("#display #ans").textContent="";
   content= content.trim();
  var output=content.concat(input);
  document.querySelector("#display #ans").textContent= output;
     
    }
   else if (operator.indexOf(input)<1 && screenContent==true){
       content="";
       var output=content.concat(input);
       document.querySelector("#display #ans").textContent= output;
      screenContent=false;
    }
    
    else if(operator.indexOf(input)>=0){
        
    container.push(content);
    screenContent=true;
     container.push(input); 
    }
    
}

function Calc(){
    
 var secondPart=display.textContent.trim();
    container.push(secondPart);
    var que= container.join('')
   var ans=eval(que);
    console.log(ans);
  document.querySelector("#display #ans").textContent= ans;
  screenContent=true;
    container=[];
    console.log(screenContent);
}

function posh() {
    
   var tag= document.querySelector("#ans");
    tag.textContent="";   
}

















