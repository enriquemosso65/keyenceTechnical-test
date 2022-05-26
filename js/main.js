const listContainer = document.getElementById('listContainer');
const addInput = event => {
    event.preventDefault();
    const { value } = event.target.inputTxt;
    if(!value)
        return;
    
    const newelement = document.createElement('div');
    newelement.classList.add('newelement');  
    newelement.textContent = value;
    listContainer.prepend(newelement);
    event.target.reset();
};
