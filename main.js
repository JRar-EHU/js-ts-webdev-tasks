
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
        preview: "./assets/slub jersey t-shirt.png",
        name:"Slub jersey T-shirt",
    },
    {
        preview: "./assets/printed t-shirt.png",
        name:"Printed T-shirt",
    },
    {
        preview: "./assets/Cotton T-shirt.png",
        name:"Cotton T-shirt",
    },
    {
        preview: "./assets/t-shirt with a motif.png",
        name:"T-shirt with a motif",
    },
    {
        preview: "./assets/cotton t-shirt regular fit.png",
        name:"Cotton T-shirt regular fit",
    },
    {
        preview: "./assets/slub jersey t-shirt 2.png",
        name:"Slub jersey T-shirt",
    },

];

const main = document.getElementsByTagName("main")[0];

// Nav section

// const navFragment = document.createDocumentFragment();
// NAV_LIST.forEach((item) => {
//     const navElement = document.createElement("li");
//     navElement.innerText = item;
//     navFragment.append(navElement);
// });
// const ul = document.createElement("ul");
// ul.append(navFragment);
//
// const navContainer = document.createElement("section");
// navContainer.append(ul);
// main.append(navContainer);
const navFragment = document.createDocumentFragment();
NAV_LIST.forEach((item) => {
    const navElementContainer = document.createElement("div");
    navElementContainer.classList.add("navElementContainer");
    navElementContainer.innerHTML = `
        <button class="text navButton">${item}</button>
    `;
    navFragment.append(navElementContainer);
})

const navContainer = document.createElement("div");
navContainer.classList.add("navContainer");
navContainer.append(navFragment);

const mainNavContainer = document.createElement("section");
mainNavContainer.classList.add("mainNavContainer");
mainNavContainer.append(navContainer);

main.append(mainNavContainer);

// Items section

const mainProductsContainer = document.createElement("section");
mainProductsContainer.classList.add("mainProductsContainer");

        // Head

const headContainer = document.createElement("div");
headContainer.classList.add("headContainer");
headContainer.innerHTML = `
    <div class="text">6 items</div>
    <div>
        <span class="text">sort by</span>
        <span class="text is-active">recommended</span>
    </div>
`;
mainProductsContainer.append(headContainer);

        // Items

const itemsContainer = document.createElement("div");
itemsContainer.classList.add("itemsContainer");

const itemFragment = document.createDocumentFragment();
DATA.forEach(item => {
    const elementContainer = document.createElement("div");
    elementContainer.classList.add("elementContainer");
    elementContainer.innerHTML = `
            <img 
            src="${item.preview}"
            alt="preview"
        >
            <p class="cardText">${item.name}</p>
            <p class="price">$ 12.99</p>
            <button class="button is-rounded is-active">Add to bag</button>
    `
    itemFragment.append(elementContainer);
});
// DATA.forEach(item => {
//     const elementContainer = document.createElement("div");
//     const preview = document.createElement("img");
//     preview.setAttribute("src", item.preview);
//     const name = document.createElement("p");
//     name.textContent = item.name;
//     const price = document.createElement("p");
//     price.innerText = "$ 12.99";
//     const button = document.createElement("button");
//     button.textContent = "Add to bag";
//
//     elementContainer.append(preview,name,price,button);
//     itemFragment.append(elementContainer);
// });
itemsContainer.append(itemFragment);

const boxItemContainer = document.createElement("div");
boxItemContainer.classList.add("boxItemContainer");

boxItemContainer.append(itemsContainer);
mainProductsContainer.append(boxItemContainer);
main.append(mainProductsContainer);


const eventArea = document.querySelector(".navContainer");
eventArea.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if(!button) {
        return;
    }
    console.log(e.target);
    const buttons = document.querySelectorAll(".navButton");
    buttons.forEach(btn => btn.classList.remove("is-active"));
    button.classList.add("is-active");
})

