
const data = [
    {
        title: "Startup Framework",
        description: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
        class: "startup-framework",
        titleColor: "#1E0E62",
        descriptionColor: "#1E0E62"

    },
    {
        title: "Web Generator",
        description: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
        class: "web-generator",
        titleColor: "#1E0E62",
        descriptionColor: "#15143966"
    },
    {
        title: "Slides 4",
        description: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
        class: "slides-4",
        titleColor: "#FFFFFF",
        descriptionColor: "#FFFFFF"
    },
    {
        title: "Postcards",
        description: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
        class: "postcards",
        titleColor: "#FFFFFF",
        descriptionColor: "#FFFFFF"
    },


]

const fragment = document.createDocumentFragment();
data.forEach((elem) => {
    const section = document.createElement("section");
    const text = document.createElement("div")
    const title = document.createElement("p");
    const description = document.createElement("p");
    const button = document.createElement("button");

    section.classList.add("elem",elem.class);

    title.append(elem.title);
    title.classList.add("text","title");
    title.style.color = elem.titleColor;

    description.append(elem.description);
    description.style.paddingLeft = "10px";
    description.classList.add("text","description");
    description.style.color = elem.descriptionColor;

    button.innerHTML = "Explore";
    button.className = "button";

    text.append(title, description);
    section.append(text,button);
    fragment.append(section);
})

const main = document.getElementsByTagName("main")[0];
const elemsContainer = document.createElement("div");
elemsContainer.className = "elemContainer";
elemsContainer.append(fragment);
main.append(elemsContainer);

const buttons = document.querySelectorAll(".button");
main.addEventListener("click", e => {
    if(e.target.tagName !== "BUTTON"){
        return;
    }
    buttons.forEach(button => button.classList.remove("is-active"));
    e.target.classList.add("is-active");
})
