const output = document.querySelector( '.output' );
const populate = document.querySelector( '.populate' );
const time = document.querySelector( '.time' )



function cal ()
{
    const input=document.querySelector('.input');
    output.innerHTML+=`<h3>Fetch value : ${input.value} <h3>`;
};

//Debounce
function callDebounce ()
{
    populate.innerHTML = '<input class="input" onkeyup="f()" value=""/>'
}


function myDebounce ( fun, t )
{
    let timer;
    return function ( ...args )
    {
        if ( timer )
            clearTimeout( timer );
        timer = setTimeout( () =>
        {
            fun();
        }, t );
    };
}

const f = myDebounce( cal, 1000 );

//Throttle

function callThrottle ()
{
    populate.innerHTML = '<input class="input" value=""/><button class="search" onclick="s()">Search</button>'
}


function myThrottle ( fun, t )
{
    let prev = 0;
    return function ( ...args )
    {
        let now = new Date().getTime();
        if ( now - prev > t )
        {
            prev = now;
            return fun( ...args );
        }
    };
}

const s = myThrottle( cal, 2000 );

