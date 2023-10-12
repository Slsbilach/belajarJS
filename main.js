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
    
    let p = document.querySelector("p")
    let button = document.querySelector("button")
    let input = document.querySelector("input")
    button.addEventListener('click', function(){
    let isi = input.value
    console.log(isi)
    p.innerText = isi
    })
