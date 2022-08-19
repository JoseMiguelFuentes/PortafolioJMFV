

let themeButton = document.querySelector ( ".theme-button")
let sun = document.querySelector ( ".sun")
let ball = document.querySelector( ".ball" )
let moon = document.querySelector( ".moon" )


document.addEventListener("DOMContentLoaded", () =>{
 
  
//Test Dark mode.
if ( JSON.parse (localStorage.getItem('theme') ) === true){
document.body.classList.add ( "light")
ball.classList.toggle ( "ball-move")
}else{
document.body.classList.remove ( "light")
}
 
})




themeButton.addEventListener( "click", ()=>{
  document.body.classList.toggle ( "light")
  ball.classList.toggle ( "ball-move")
  if ( document.body.classList.contains ( "light" ) ){
    localStorage.setItem('theme', JSON.stringify(true))
  }else{
    localStorage.setItem('theme', JSON.stringify(false))
  }
} )


let nav = document.querySelector ( "nav" )

window.addEventListener( 'scroll', () => {
  if (window.scrollY > 70){
    nav.classList.add( "nav-efect" )
  }else{
    nav.classList.remove( "nav-efect")
  }
})
