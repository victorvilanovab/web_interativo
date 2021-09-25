// TODO(you): Modify the class in whatever ways necessary to implement
// the app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor(containerElement, TV_SHOWS) {

    this.containerElement = containerElement;

    // chama a capa
    const header = new Header(containerElement);


    // chama o timer
    const timer = new TimeKeeper(containerElement);

    //chama os graficos
    const graficos = new Graphs(this.containerElement);

    //chama os tv shows
    const section_items = document.createElement('section');
    section_items.className = "items";

    const article = document.createElement('article');
    article.setAttribute('id', 'article_doc');

    containerElement.append(section_items);
    section_items.appendChild(article);

    for (let i = 0; i < TV_SHOWS.length; i++){
      const serie = new TVShow(article, TV_SHOWS, i);
      const container_temporadas = document.querySelector("#temporadas_serie"+n_series_add);
      const temporadass = new Season(container_temporadas, TV_SHOWS, i);
    }

    const section_pricture = document.createElement("section");
    section_pricture.setAttribute('id',"modal-view");
    section_pricture.className = "hidden";
    section_pricture.addEventListener('click',onModalClick);
    section_items.appendChild(section_pricture);
  }

}

// Find the container in which the app will be rendered
const container = document.querySelector('#app');

// Create a new instante of the App class
// TODO(you): You must decide how to inform the class about
//            the container and the TV_SHOWS data.
const app = new App(container, TV_SHOWS);