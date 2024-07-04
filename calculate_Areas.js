let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    
    let area = length * width;

document.getElementById('result').innerText = ' The area of the rectangle is: ${area}';
}

function calculateTotal(){
    const grocery1 = parseFloat(document.getElementById('grocery1').value) ;
    const grocery2 = parseFloat(document.getElementById('grocery2').value) ;
    const grocery3 = parseFloat(document.getElementById('grocery3').value) ;

    const totalAmount = groceryTracker(grocery1, grocery2, grocery3);

    document.getElementById('totalAmount').textContent = 'totalAmount';
}

let count =0;

function displayCount(){
    document.getElementById('followersCount').innerText = count;
}

document.getElementById('followButton').addEventListener('click',() => {
   count++;
   displayCount();
   if (count ==10) {
    alert('Congratulations! you have reached 10 followers.');
   } 
});

function resetCount() {
    count = 0;
    displayCount();
    alert('Followers count has been reset.');
}

document.getElementById('resetButton').addEventListener('click', resetCount);