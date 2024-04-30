// Generate an array of numbers for cards
const cards = Array.from({ length: 9 }, (_, index) => index + 1);

// Create card elements
function createCardElement(value) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = value;
    card.setAttribute("data-value", value);
    
    return card;
}

// Render cards
function renderCards() {
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";

    cards.forEach((value) => {
        const cardElement = createCardElement(value);
        cardsContainer.appendChild(cardElement);
    });
}

// Shuffle numbers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Sort numbers
function sortArray(array) {
    return array.sort((a, b) => a - b);
}

// Shuffle cards
document.getElementById("shuffleBtn").addEventListener("click", () => {
    shuffleArray(cards);
    renderCards();
});

// Sort cards
document.getElementById("sortBtn").addEventListener("click", () => {
    sortArray(cards);
    renderCards();
});

// Initial render of cards
renderCards();
