//console.log("Hello Word")
//alert("ada notifikasi")
//prompt("Pinjam Seratus")

//kekurangan var membuat distraksi
//var Promnet = "Coding is Easy"  
//console.log(Promnet)
//var Promnet = "nothing is Possible"
//console.log(Promnet)

//let gaboleh ada dua yang sama
//let Promnet = "coding is fun"
//console.log(Promnet)

//nama variable dan isi ga boleh sama
//const Promnet = " coding is my life"
//console.log(Promnet)

/*let totalPoin = prompt("Masukan Poin Anda")
   if(totalPoin > 100){
      document.write("congratulations");
    }else{
     document.write("keep trying")
   } */
 

/*if totalPoin = prompt("Masukan Poin Anda") 
    if( totalPoin = x<10 && y>1){
        document.write("true");
    }
    else{
        document.write("false");
    }
    */
   
    /*let x = 6;
    let y = 3;

    console.log(x<10 && y > 1);
    console.log(x<10 && y < 1);
    console.log(x==6||y==5);
    console.log(x==6||y==5);

    document.write(x<10 && y > 1);
    document.write("<br>");
    document.write(x<10 && y > 1);*/
    

   /*let p = document.querySelector("p")
    let button = document.querySelector("button")
    let input = document.querySelector("input")
    button.addEventListener('click', function(){
    let isi = input.value
    console.log(isi)
    p.innerText = isi
    })*/

    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask(){
        if(inputBox.value === ''){
            alert("you must write something!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML= inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span)

        }
        inputBox.value = "";
        saveData();
    }

    listContainer.addEventListener("click",function(e){

    
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }  
    },false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
