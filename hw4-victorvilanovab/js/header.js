// TODO(you): Modify the class in whatever ways necessary to implement
// the header behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods


class Header {
  constructor(containerElement) {
    // This class should render both title and profile HTML
    this.containerElement = containerElement;


    //capa
      const header = document.createElement('header');

      const section = document.createElement('section');
      header.appendChild(section);

      const div = document.createElement('h1');
      div.textContent = "TV Show List";
      section.appendChild(div);

      //botao de tirar as querys
      const section_botao_string = document.createElement('section');
      section_botao_string.setAttribute('id','section_botao_string');
      const div_botao_string = document.createElement('div');
      div_botao_string.setAttribute('id','div_botao_string');
      const img_botao = document.createElement('img');
      img_botao.addEventListener('click', clear_seach);
      img_botao.setAttribute('id','button_close');
      img_botao.src = "images/close.svg";
      const h1_search_results = document.createElement('h1');
      h1_search_results.setAttribute('id','h1_search_results');
      h1_search_results.textContent = "Search Results";
      div_botao_string.appendChild(img_botao);
      div_botao_string.appendChild(h1_search_results);
      section_botao_string.appendChild(div_botao_string);


      // search box
      const section_box = document.createElement('section');
      section_box.setAttribute('id','section_box_id');

      const div_search = document.createElement("div");
      div_search.className = "search-input";
      div_search.setAttribute('id','search-input');
      const input_query = document.createElement("input");
      input_query.setAttribute('id','input_id');
      input_query.setAttribute('type', "text");
      input_query.setAttribute('placeholder', 'Search..');
      div_search.appendChild(input_query);

      const list = document.createElement('div');
      div_search.appendChild(list);

      const section_results = document.createElement('section');
      section_results.setAttribute('id','results_search');
      section_results.className = "results_search";

      let searchTimeoutToken = 0;

      input_query.onkeyup = (e) => { 

        clearTimeout(searchTimeoutToken);

        if (e.target.value.trim().lenght === 0) {
          return;
        }

        let searchTimeout = setTimeout(() => { 

          var addShowCallback = e.target.value;
        const url = `http://api.tvmaze.com/search/shows?q=${addShowCallback}`;
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {

          list.innerHTML = '';
          section_results.innerHTML = '';
      
          var dict = {};
          
          let var_names = jsonData.map(element => element.show.name);
          let var_id = jsonData.map(element => element.show.id);

          for (let i=0; i < Number(Object.keys(jsonData).length); i++){
            dict[var_names[i].toString()] = var_id[i]
          }

    
         

      jsonData.map(element => element.show.name).forEach(result => {
  


          const div_results = document.createElement('div');
          div_results.className = 'div_results';
          //div_results.addEventListener('click', onThumbnailClick);
          //div_results.setAttribute("value",dict[result]);
          const h1 = document.createElement('h1');
          //h1.setAttribute('onclick',"onThumbnailClick()");
          h1.addEventListener('click', () => {
            //mudanças

            console.log("clicou no:");

            var season_id = dict[result];
            
            var url = season_id => `http://api.tvmaze.com/shows/${season_id}`;
            const promises = [];
          
            promises.push(fetch(url(season_id))
              .then(response => response.json()));
            
            Promise.all(promises).then( promises => {
          
            var jsonData = promises[0];
            
            try{
            var image = createImage(jsonData['image']['original']);
            }
            catch{
             var image = "images/no-image-show.png";
            }
            document.body.classList.add('no-scroll');
            const modalView = document.getElementById("modal-view");
            modalView.style.top = window.pageYOffset + 'px';
            modalView.appendChild(image);
            modalView.classList.remove('hidden');
          
          
            })
          });
          h1.setAttribute("value",dict[result]);
          h1.textContent = result;
          const h12 = document.createElement('img');
          h12.setAttribute('value',dict[result]);
          h12.addEventListener('click', add_show);
          h12.className = "plus_image";
          h12.src = "images/plus.svg";
          

          div_results.appendChild(h1);
          div_results.appendChild(h12);
          section_results.appendChild(div_results);
        profile.appendChild(section_botao_string);
        profile.append(section_results);



        const element = document.createElement('li');
        element.style.display = 'none';
        element.innerText = result;
        list.appendChild(element);

      }
       
      ) 
      
      });

        }, 250);
  
      }

        
    
      const div_icon = document.createElement('div');
      div_icon.className = "icon";
      const ii = document.createElement('i');
      ii.className = "fa fa-search";
      div_icon.appendChild(ii);
      div_search.appendChild(div_icon);

      section_box.appendChild(div_search);

      
    
    //profile
      const profile = document.createElement('section');
      profile.setAttribute('id', "profile-pic");
      profile.setAttribute('class',"perfil");

      const photo = document.createElement('img');
      photo.src = "../images/profile.png";
      profile.appendChild(photo);

      const h1 = document.createElement('h1');
      h1.textContent = "Murilo Camargos";
      profile.appendChild(h1);



    this.containerElement.append(header);
    /*this.containerElement.append(section_box);*/
    this.containerElement.append(profile);
    this.containerElement.append(section_box);
    
  }
}

// Create a new instante of the App class
// TODO(you): You must decide how to inform the class about
//            the container and the TV_SHOWS data.


function clear_seach(event){
  const get_section1 = document.getElementById('section_botao_string');
  get_section1.innerHTML = '';
  const get_section2 = document.getElementById('results_search');
  get_section2.innerHTML = '';

}

function add_show(event){
  console.log(event.target.getAttribute('value'));
  const trey = new RenderSearch(event.target.getAttribute('value'));
}


function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

/*
function onThumbnailClick() {
  console.log("clicou no:");
  
  var season_id = event.currentTarget.value;
  console.log("clicou no:");
  var url = season_id => `http://api.tvmaze.com/shows/${season_id}`;
  const promises = [];

  promises.push(fetch(url1(season_id))
    .then(response => response.json()));
  
  Promise.all(requestpromises).then( promises => {

  var jsonData = promises[0];
  const image = createImage(jsonData['image']['original']);
  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');

  })
}
*/

function onModalClick() {
  document.body.classList.remove('no-scroll');
  const modalView = document.getElementById("modal-view");
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}