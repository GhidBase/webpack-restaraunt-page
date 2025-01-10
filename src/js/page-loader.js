
import mexicanFoodPicture from "../imgs/mexican-food.jpg";

class pageLoader {
    constructor() {
        this.contentDiv = document.querySelector("#content");
        this.homeButton = document.querySelector("#home");
        this.menuButton = document.querySelector("#menu");
        this.contactButton = document.querySelector("#contact");

        this.setButtonListeners();
        // this.loadHomePage();
    }

    loadHomePage() {
        this.clearContentDiv();
        this.addElementToContent("h1", "Casa Del Roger Mexican Food");
        this.addElementToContent(
            "p",
            `With a great selection of classic Mexican dishes
            and beers, Casa Del Roger is a the place to go
            when you need something to eat. With high quality
            food, and our refrigerator chilled drink glasses,
            every meal here is sure to leave you satisfied.`
        );
        this.addElementToContent("img", undefined, mexicanFoodPicture)

    }

    loadMenuPage() {
        this.clearContentDiv();
        this.addElementToContent("h1", "Menu");
        this.addListToContent(["Burritos", "Enchilada", "Tacos", "Fajitas", "Tamales", "Shrimp a la Diabla"])
    }

    loadContactPage() {
        this.clearContentDiv();
        this.addElementToContent("h1", "Contact");
        this.addElementToContent("p", "Phone: 555-555-5555");
        this.addElementToContent("p", "Email: rogerthecook@email.com");

    }

    addElementToContent(element, textContent = null, src = null) {
        const newElement = document.createElement(element);
        this.contentDiv.appendChild(newElement);
        if(textContent) {
            newElement.textContent = textContent;
        }
        if(src) {
            newElement.src = src;
        }
            
    }

    addListToContent(list) {
        const newList = document.createElement("ul");
        list.forEach(element => {
            const listElement = document.createElement("li");
            listElement.textContent = element;
            newList.appendChild(listElement);
        });
        this.contentDiv.appendChild(newList);
    }

    clearContentDiv() {
        this.contentDiv.innerHTML = "";
    }

    setButtonListeners() {
        this.homeButton.addEventListener("click", () => this.loadHomePage());
        this.menuButton.addEventListener("click",() => this.loadMenuPage());
        this.contactButton.addEventListener("click",() => this.loadContactPage());
    }
}

export {pageLoader}