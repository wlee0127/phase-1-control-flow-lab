function scuberGreetingForFeet(arg){

  return arg<=400 ? 'This one is on me!'
    : arg>400 && arg<=2000 ? 'That will be twenty bucks.'
    : arg>2000 && arg<=2500 ? 'I will gladly take your thirty bucks.'
    : 'No can do.';
 
}

function ternaryCheckCity(arg){

  return arg==="NYC" ? "Ok, sounds good."
  : 'No go.';
}

function switchOnCharmFromTip(arg){
   return arg==='generous' ? 'Thank you so much.'
   : arg==='not as generous' ? 'Thank you.'
   :'Bye.';
   
}