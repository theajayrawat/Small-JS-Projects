const stars=document.querySelectorAll('.star');
const output=document.querySelector('.output');
const submit=document.querySelector('.submit');


stars.forEach((star, index)=>{

    ['click','mouseover','mouseout'].forEach((action)=>{

        star.addEventListener(action,()=>{
            let text=""
            let content=""
            stars.forEach((ele, ind)=>{
                if(action=='click'){
                  if(ind<=index) {
                    ele.classList.add('orange');
                  }
                  else{
                    ele.classList.remove('orange');
                  }
                }
                else if(action=='mouseover'){
                    if(ind<=index) {
                      ele.classList.add('yellow');
                    }
                    else{
                      ele.classList.remove('yellow');
                    }
                    ratingText(index); 
                  }
                else{
                      ele.classList.remove('yellow');
                      output.innerHTML=text;
                }

            })
        })
    })
    
})

ratingText=(index)=>{
    if(index==0){
      content= "I just hate it ";
    }
    else if(index==1){
      content="I don't like it ";
    }
    else if(index==2){
      content= "It is awesome ";
    }
    else if(index==3){
      content= "I just like it ";
    }
    else{
      content= "I just love it ";
    }
    output.innerHTML=content;
}

submit.addEventListener('click',()=>window.location.reload());


