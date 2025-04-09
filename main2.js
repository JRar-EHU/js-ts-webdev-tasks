
const NAV_LIST =[
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift Sets"
];
const DATA = [
    {
        preview: "slub jersey t-shirt.png",
        name: "Slub jersey T-shirt",
    },
    {
        preview: "printed t-shirt.png",
        name: "Printed T-shirt",
    },
    {
        preview: "cotton T-shirt.png",
        name: "Cotton T-shirt",
    },
    {
        preview: "t-shirt with a motif.png",
        name: "T-shirt with a motif",
    },
    {
        preview: "cotton t-shirt regular fit.png",
        name: "Cotton T-shirt regular fit",
    },
    {
        preview: "slub jersey t-shirt 2.png",
        name: "Slub jersey T-shirt",
    },

];

    // Nav Section

const liFragment = document.createDocumentFragment();
NAV_LIST.forEach((item) => {
   const li = document.createElement("li");
   li.classList.add("m-1","liButton");
   li.innerHTML = `
        <button class="text" data-category="asideUlButtons">${item}</button>
   `
    liFragment.append(li);
});

const ul = document.getElementById("asideUlList");
ul.append(liFragment)


    // Items Section

const cardsFragment = document.createDocumentFragment();
DATA.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("column","is-one-third");
    card.innerHTML = `
            <div class="card is-transparent">
                <div class="card-image">
                    <figure class="image">
                        <img src="./assets/${item.preview}" alt="preview" >
                    </figure>
                </div>
                <div class="content is-flex is-flex-direction-column is-align-items-center">
                    <p class="cardText m-1" >${item.name}</p>
                    <p class="card-price m-1">$ 12.99</p>
                    <button class="button is-rounded m-1">Add to bag</button>
                </div>
            </div>
    `
    cardsFragment.append(card);
});
const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.append(cardsFragment);

    // Events

ul.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if(!button) {
        return;
    }
    console.log(e.target);

    const buttons = document.querySelectorAll('[data-category="asideUlButtons"]');
    buttons.forEach(btn => btn.classList.remove("is-active"));
    button.classList.add("is-active");
})

