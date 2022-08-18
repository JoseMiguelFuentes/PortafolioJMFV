

let themeButton = document.querySelector ( ".theme-button")
let sun = document.querySelector ( ".sun")
let ball = document.querySelector( ".ball" )
let moon = document.querySelector( ".moon" )


document.addEventListener("DOMContentLoaded", () =>{
 
  
//Test Dark mode.
if ( JSON.parse (localStorage.getItem('theme') ) === true){
document.body.classList.add ( "dark")
}else{
document.body.classList.remove ( "dark")
}
 
})




themeButton.addEventListener( "click", ()=>{
  document.body.classList.toggle ( "dark")
  ball.classList.toggle ( "ball-move")
  moon.classList.toggle ( "light" )
  sun.classList.toggle ( "darkSun" )
  if ( document.body.classList.contains ( "dark" ) ){
    localStorage.setItem('theme', JSON.stringify(true))
  }
} )
