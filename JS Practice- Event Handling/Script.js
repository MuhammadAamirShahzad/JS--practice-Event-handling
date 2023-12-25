

let a = document.querySelector("#btn1");

//now we will write arrow function

a.onclick = () => {

    console.log("hey! you clicked button 3");
}
// we can use one onclick event at a time. If we try to more than one event handelrs, the code will over-wite and code written most lastly(blow) will be run
// To resolve this issue, we can use Event Listner
//let's create a new button, not here but in HTML file
//lets catch that button with querySelector

let c= document.querySelector("#btn4"); //catched that with variable b
c.addEventListener("click", () =>{
    console.log("Button 4 was clicked")
})

