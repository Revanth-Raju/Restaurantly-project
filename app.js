
function calculateTotal() {
    // Get values from the form 
    var itemName = document.getElementById('itemName').value;
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    var price = parseFloat(document.getElementById('price').value);

    var userName = document.getElementById('userName').value; 
    var userEmail = document.getElementById('userEmail').value;
    var userPhone = document.getElementById('userPhone').value;  

    var gstPercentage = parseFloat(document.getElementById('gstPercentage').value);
      
    // Validate inputs
    if (isNaN(quantity) || isNaN(price) || isNaN(gstPercentage)) {
        alert("Please enter valid numeric values for Quantity, Price, and GST Percentage.");
        return;   
    } 

    // Calculate total amount
    var total = quantity * price;

    // Calculate GST
    var gst = (gstPercentage / 100) * total;

    // Calculate total amount including GST
    var totalWithGST = total + gst;

    // Calculate tip based on the total amount
    var tip = 0;
    if (totalWithGST <= 1000) {
        tip = 50;
    } else if (totalWithGST > 1000 && totalWithGST <= 1500) {
        tip = 100;
    } else if (totalWithGST > 1500 && totalWithGST <= 2000) {
        tip = 250;
    } else {
        tip = 500;
    } 

    // Calculate final total amount with GST and tip
    var finalTotal = totalWithGST + tip;

    // Display result
    var summary = "Name: " + userName + "<br> Email: " + userEmail + "<br> Phone: " + userPhone +
                      "<br><br> Total for " + itemName + ": \u20B9" + totalWithGST.toFixed(2) +
                      " (including GST at " + gstPercentage + "%: \u20B9" + gst.toFixed(2) + ")" +
                      "<br> Tip: \u20B9" + tip.toFixed(2) +
                      "<br> Final Total: \u20B9" + finalTotal.toFixed(2);

        // Display result in the scrolling line
        var scrollLine = document.getElementById('scrollLine');
        scrollLine.innerHTML = summary;
}




// Get the button:
let mybutton = document.getElementById("myBtn");

// When we scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";  
  }
} 




if(document.body.scrollTop > 20 || document.documentElement)
// When we clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; 
}



// let a = 10;
// {
//   var b = 20;
//   console.log(a);
// }

// console.log(b);



// function no (a,b){
//   console.log(a+b);
// }
// no(5,10);

// for(let i=0; i<=10; i++){

// }