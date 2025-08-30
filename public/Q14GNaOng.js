process.stdin.on('data', input => {

  let greeting = input.toString().trim();

   // use the greeting variable in your code, and start it on the next line
   
switch(greeting) {
    case "HELLO":
        console.log("ENGLISH");
        break;
    case "MABUHAY":
        console.log("TAGALOG");
        break;
    default:
        console.log("UNKNOWN");
        break;
}





  // end of your code
  // do not remove the lines below

  process.exit();

});

