

let myFunction = (num) => {
     let flag = false;
     for(let i = 2; i < num; i++){
          if(num %i == 0){
               console.log("num is not prime");
               flag = true;
               break;
          }
     }
     if(flag === false){
          console.log("num is prime");
     }
}
myFunction(15);
