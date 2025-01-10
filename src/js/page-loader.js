
import mexicanFoodPicture from "../imgs/mexican-food.jpg";

class pageLoader {
    constructor() {
        this.contentDiv = document.querySelector("#content");
    }

    loadHomePage() {
        // Need to load:
        // h1, p, img
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
}

export {pageLoader}