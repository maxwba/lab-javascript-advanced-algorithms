const stack = new StackDataStructure(2);


// getting the parent
const ulStack = document.getElementById('stack');

// creating li elements based on MAX_SIZE - inverted
for (let i = stack.MAX_SIZE; i > 0; i -= 1) {
    const newLi = document.createElement('li');
    newLi.classList.add('list-group-item','list-group-item-dark');
    newLi.dataset.stack = i;
    ulStack.appendChild(newLi);
}

// getting the button
const addStackButton = document.getElementById('add-stack');


// getting the input
const addInput = document.getElementById('add-element-stack');

addStackButton.onclick = () => {
    let {value} = addInput;
    if (!value) {
        errorMsg('Escreva alguma coisa porra!');
        return;
    }
    if (stack.canPush()) {
        const nextLimNum = stack.size + 1;
        const liStack = document.querySelector(`li[data-stack="${nextLimNum}"]`)
        liStack.innerHTML = value;
        stack.push(value);
        addInput.value = ''; 
    } else {
        errorMsg('Stack overflow')
    }
}

function errorMsg(message){
    // getting last li element so we can use on insertBefore method
    const lastLi = document.querySelector(`li[data-stack="${stack.MAX_SIZE}"]`);
    // creating new li element for stack over flow
    const newLi = document.createElement('li');
    newLi.classList.add('list-group-item', 'list-group-item-danger');
    newLi.innerHTML = message;
    ulStack.insertBefore(newLi,lastLi)  
    // removing new li element after few millisecounds
    setTimeout(() => ulStack.removeChild(newLi),500);
    addInput.value = ''; 
}


