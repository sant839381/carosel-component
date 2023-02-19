let index=1;
   showSlides(index)
   function plusSlides(n)
   { index+=n
    showSlides(index)
    doSomething()
   }

   function currentSlide(n)
   { 
    index=n
    showSlides(index)
   }

 function showSlides(n)
   { 
      let i;
      let slides=document.getElementsByClassName("mySlides")
      let dot=document.getElementsByClassName("dot");
       
      if (n>slides.length)
      { 
        index=1
      }
      if(n<1)
      index=slides.length

      for(i=0;i<slides.length;i++)
       slides[i].style.display="none"

       slides[index-1].style.display="block"

       for (i=0;i<dot.length;i++)
          dot[i].className=dot[i].className.replace(" active","")
       
         dot[index-1].className +=" active"
    }


    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time))
    }
    
    const doSomething = async () => {
      for (let i = 1; i <=4; i++) {
        await sleep(10000)
        showSlides(i)
        console.log(i)
        if(i==4)
        i=0
      }
    }
    
   

    // for (let i = 1; i <= 15; i++) {
    //     setTimeout(() => {
    //       showSlides(i);
    //       console.log("santosh");
    //     }, 30000);
    //   }

//     for(let i=1;i<=4;i++)
//    { 
//     setTimeout(()=>{ 
//       showSlides(i)
//          console.log("santosh") ;  
//       } ,i*1000)
//     //    if(i==3)
//     //    i=0;
    
//}
 