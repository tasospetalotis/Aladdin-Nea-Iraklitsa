var salads_button = document.getElementById('salads');
var appetizer_button = document.getElementById('appetizer');

var salads_pop_up = document.getElementById('salads_pop_up');
var appetizer_pop_up = document.getElementById('appetizer_pop_up');

var pop_up = document.querySelectorAll('.pop_up');

console.log('popup length:', pop_up.length);

function display(pop) {
    for (var i = 0; i < pop_up.length; i++) {
        pop_up[i].style.display = 'none';
        pop_up[i].classList.remove('selected');
    }
    pop.style.display = 'block';
    pop.classList.add('selected');
}

salads_button.addEventListener('click', function() {
    display(salads_pop_up);
});

appetizer_button.addEventListener('click', function() {
    display(appetizer_pop_up);
});

// JavaScript object to store the prices
const prices = {
    1: "€12.00",
    2: "€14.00",
    3: "€9.00",
    4: "€11.00",
    5: "€8.00",
    5.1: "€8.00",
    6: "€7.00",
    7: "€6.00",
    8: "€10.00",
    9: "€9.00",
    10: "€7.50",
    11: "€10.00",
    12: "€12.00",
    13: "€9.00",
    14: "€11.00",
    15: "€8.00",
    16: "€7.00",
    17: "€6.00",
    18: "€10.00",
    19: "€9.00",
    20: "€7.50",
    21: "€10.00",
    22: "€12.00",
    23: "€9.00",
    24: "€11.00",
    25: "€8.00",
    26: "€7.00",
    27: "€6.00",
    28: "€10.00",
    29: "€9.00",
    30: "€7.50",
    31: "€7.50",
    32: "€7.50",
    33: "€7.50"
};

// Function to populate prices in the pop-ups
function populatePrices() {
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(element => {
        const id = element.getAttribute('data-id');
        element.textContent = prices[id] || "Price not available";
    });
}

// Populate prices on page load
document.addEventListener('DOMContentLoaded', populatePrices);

// Toggle the visibility of the pop-up
function togglePopup(buttonId, popupId) {
    const button = document.getElementById(buttonId);
    const popup = document.getElementById(popupId);
    button.addEventListener('click', () => {
        const isVisible = popup.style.display === 'block';
        popup.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            popup.classList.add('selected');
        }
    });
}
