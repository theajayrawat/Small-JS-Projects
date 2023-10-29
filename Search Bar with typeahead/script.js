const resultBox=document.querySelector(".result-box")
const inputBox=document.querySelector(".input-box")
var availableKeywords =  [
  "Best restaurants in city",
  "Top tourist attractions in city",
  "How to cook dish",
  "Travel tips for destination",
  "Latest technology trends",
  "Best books to read in 2023",
  "Home workout routines",
  "Financial planning for beginners",
  "Healthy food recipes",
  "Upcoming event schedule"
]

function suggestion(){
  let result=[];
  let input=inputBox.value;
  if(input.length){
    result=availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    })
  }
  display(result);

  if(!result.length){
    resultBox.innerHTML="";
  }
}

function display(result){
  const content=result.map((list)=>{
    return "<li onclick=selectInput(this)>"+list+"</li>";
  })

  resultBox.innerHTML="<ul>"+content.join("")+"</ul>"
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML="";
}



