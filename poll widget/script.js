

const optionNo = document.querySelector( "#no" );
const optionYes = document.querySelector( "#yes" );

function calc ()
{
 
  return Math.floor( Math.random() * 101 );
}

function style (randPercent)
{
  const noTop = optionNo.getBoundingClientRect().top;
  const noLeft = optionNo.getBoundingClientRect().left;

  const yesTop = optionYes.getBoundingClientRect().top;
  const yesLeft = optionYes.getBoundingClientRect().left;

  optionNo.style = " position:absolute; top: " + noTop + "px; left: " + noLeft + "px;line-height: 2.35rem";
  optionYes.style = " position:absolute; top: " + yesTop + "px; left: " + yesLeft + "px;line-height: 2.35rem";
  optionNo.innerText = 100-randPercent + "%";
  optionYes.innerText = randPercent + "%";
  optionYes.parentElement.style = "background:darkgrey;" + "width:" + randPercent + "%";
  optionNo.parentElement.style = "width:" + 100-randPercent + "%";


}

function yesFunction ()
{
  const randPercent=calc();
  style(randPercent);
  removeListeners();
}

function noFunction ()
{
  const randPercent=calc();
  style(randPercent);
  removeListeners();
}

function removeListeners ()
{
  optionNo.removeEventListener( "click", noFunction, true );
  optionYes.removeEventListener( "click", yesFunction, true );
}

optionYes.addEventListener( "click", yesFunction, true );
optionNo.addEventListener( "click", noFunction, true );




