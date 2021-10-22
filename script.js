const panels =document.querySelectorAll('.panel');
/* it select any class,id,paragraphy by this evemn all the elements of sthe same 
 class name is get stored in the form of array*/
 panels.forEach((panel)=>{
     panel.addEventListener('click',() =>{ 
         removeActiveClases()
         panel.classList.add('active')
        })
 })

 function removeActiveClases(){
     panels.forEach(panel =>{
         panel.classList.remove('active')
     })
 }


 