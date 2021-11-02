 

 function randNumGenerator(Inputs){
    let ranDecimal = Math.random() * Inputs ;
    let nUm = Math.floor(ranDecimal)
    return nUm
    
 }

 
 function getHome(){

     let array = ["masion","on the street","apartment","private house"];
     let some = array[randNumGenerator(array.length)]
     let ranDecimal = Math.random() * 3+1;
     let NUM = Math.floor(ranDecimal)
     if (NUM==1){
         return some;
     }
     else{
         return process.argv[2] 
    
     }
    }
     function getPet(){
        let array2 = [ "charmander","dog","cat","paper","dragon"];
        let Some = array2[randNumGenerator(array2.length)]
        let RAnDecimal = Math.random() * 3+1;
    let nUM = Math.floor(RAnDecimal)
    if (nUM==1){
        return Some;
    }
    else{
        return process.argv[3]
 
    }
}     
   

function getTravelCount(input2){
    let RanDecimal = Math.random() * input2 ;
    let NUm = Math.floor(RanDecimal)
    return NUm

}
function getConsole(){
    let array3 = [ "soulja boy console","psp","xbox","computer","ps4"];
    let SOme = array3[randNumGenerator(array3.length)]  
    return SOme
}
function getFood(){
    let array4 = [ "chocolate bars","wood","cooked chicken","lettuce","your lucky:Every food!"];
    let SOMe = array4[randNumGenerator(array4.length)]  
    return SOMe
}
function mash(){
    console.log('you will live in a'+'', getHome(),''+ 'and travel to'+"",getTravelCount(101),'','countries', 'and have a pet','',getPet(),'','and the',getConsole(),'','and finally the only food you will eat is',getFood()) ;
}
mash();

