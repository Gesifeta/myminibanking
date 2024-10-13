import React,{useEffect} from 'react'
function Nav() {

    useEffect(() => {
      const nav= document.querySelector('.nav')
        const minNav = document.querySelector(".miniNav");
        const btn= document.querySelector('.btn btn-secondary')
        window.addEventListener("scroll", navFix);
        function navFix() {
          if (window.scrollY > minNav?.offsetHeight + 150) {
            minNav?.classList.add("active");
          } else {
            minNav?.classList.remove("active");
          }
        }
      


      });
const  hideMenu=()=>{
  const nav= document.querySelector('.nav')
  const minNav = document.querySelector(".miniNav");
  const btn= document.querySelector('.btn btn-secondary')
nav?.classList.add('inactive')
}
  return (
   <div>this
     
   </div>
  )
}

export default Nav