var j=0;
for (var i=0; i<10; i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var classes = this.innerHTML[11];
    j++;
    while(j<10)
    {
        
        if (j%2!=0){
            document.querySelector("."+classes+"").innerHTML="x";
            document.querySelector("h2").innerHTML="Player 2 turn:";
            document.querySelector("h2").style.color="#00D7FF";
            break;
        }
        else if (j%2==0)
        {
            document.querySelector("."+classes+"").innerHTML="o";
            document.querySelector("h2").innerHTML="Player 1 turn:";
            document.querySelector("h2").style.color="#7DCE13";
            break;
        }
    }
    

   
    
});

}