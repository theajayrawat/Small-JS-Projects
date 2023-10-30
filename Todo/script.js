const addBtn=document.querySelector(".add")
const inputBox=document.querySelector('.input-box')
const outputBox=document.querySelector('.output-box')

addBtn.addEventListener('click', (e)=>{
  if(!inputBox.value)
    return;
  return outputBox.innerHTML+='<div class="list"><li>'+inputBox.value+'</li><button class="update" onclick="removeTask(this)">Update</button><button class="delete" onclick="updateTask(this)">Delete</button></div>';

})

function removeTask(currElement){
  let existingValue=currElement.previousElementSibling.textContent;
  let currInput=document.createElement('input')
  currInput.type='text';
  currInput.className='input-box'
  currInput.value=existingValue;

  currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)
}

function updateTask(currElement){
  currElement.parentElement.remove()
}







