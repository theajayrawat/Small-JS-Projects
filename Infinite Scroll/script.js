
const main=document.querySelector('.main');

let limit=10;
let pageCount=1;
let postCount=1;

const getPost= async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
  const data = await res.json();
  data.map((currElement, index)=>{
    const htmlData=`<div class="header">
    <h2>${postCount++}<h2>
    <p>${currElement.body}</p>
  </div>`;
  main.insertAdjacentHTML('beforeend', htmlData)
  })

}

getPost();

const showData=()=>{
  pageCount++;
  getPost() 
}

window.addEventListener('scroll', ()=>{
  if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
    console.log("I'am at bottom");
    showData();
  } 
})






