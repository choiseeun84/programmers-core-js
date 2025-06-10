



// function earth(){

//     let water = true;
//     let gravity = 10;

//     function tiger(){

//     }

//     return tiger;

// }

// const ufo = earth();











const button = document.querySelector('.btn');

// IIFE


const handleClick = (() => {
    let isClicked = false;

    return () => {
        if(!isClicked){
            document.body.style.background = 'orange'
        }else{
            document.body.style.background = 'white'
        }

        isClicked = !isClicked
    }

})()



// button.addEventListener('click',handleClick);

// // removeEventListener



// function bindEvent(){

// }





function useState(init){
    let value = init;

    function read(){
        return value;
    }

    function write(){
        value = newValue;
    }

    return [read,write];
}



const [value,setValue] = useState('hello')

// read()
// write()







