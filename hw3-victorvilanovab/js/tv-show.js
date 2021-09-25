// TODO(you): Modify the class in whatever ways necessary to implement
// the tvshow behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
// - Include and bind eventListeners

class TVShow {
  constructor(containerElement, TV_SHOWS, i) {
    this.containerElement = containerElement;

    const section = document.createElement('section');
    section.className = "serie";

      //section esquerda
      const section_esq = document.createElement('section');
      section_esq.className = 'img';

      const div_esq = document.createElement('div');
      div_esq.className = "col1";

      const img_esq = document.createElement('img');
      img_esq.src = TV_SHOWS[i]["image"];

      const select_esq = document.createElement('select');
      select_esq.className = "wselect";
      select_esq.addEventListener('change',click);
      //select_esq.addEventListener('change',motion);
      select_esq.style = "width: 160px; height: 30px;";
      const seasons = TV_SHOWS[i]["seasons"];
      for (let n=0; n < Number(seasons.length + 1); n++ ){
        const seasonsn = document.createElement("option");
        if(n===0){
            seasonsn.textContent =  "Season";
            seasonsn.value = "s"+i+"t"+n;
        }
        else{
        seasonsn.textContent =  "Season " + Number(n);
        seasonsn.value = "s"+i+"t"+n;
        }
        select_esq.appendChild(seasonsn);
    }
    



      //section direita
      const section_dir = document.createElement('section');
      section_esq.className = 'text';

      const div_dir = document.createElement('div');
      div_dir.className = "col2";
      div_dir.id = "serie" + i;

      const h1_dir = document.createElement('h1');
      h1_dir.textContent = TV_SHOWS[i]["name"];

      const p_dir_1 = document.createElement('p');
      p_dir_1.className = "blue";
      const link = document.createElement("a");
      link.href = TV_SHOWS[i]["officialSite"];
      link.textContent = "Premiered at " + TV_SHOWS[i]["channel"] + ' on ' + TV_SHOWS[i]["premiered"] +' ('+ TV_SHOWS[i]["status"] + ") ";

      const p_dir_2 = document.createElement('p');
      p_dir_2.className = "text";
      p_dir_2.textContent = TV_SHOWS[i]["summary"];

      const p_dir_3 = document.createElement('p');
      p_dir_3.className = "genres";
      const generos = TV_SHOWS[i]["genres"];
      p_dir_3.textContent = "Genres: ";
      for (let n=0; n < generos.length; n++ ){
        const genn = document.createElement("em");
        genn.textContent = " "+ generos[n] + " ";
        p_dir_3.appendChild(genn);
      }



      const temporadas = document.createElement('section');
      temporadas.className = "temporadas";
      temporadas.setAttribute('id', 'temporadas_serie'+i);


    
      this.containerElement.append(section);

      section.appendChild(section_esq);
      section.appendChild(section_dir);

      section_esq.appendChild(div_esq);
      div_esq.appendChild(img_esq);
      div_esq.appendChild(select_esq);

      section_dir.appendChild(div_dir);
      div_dir.appendChild(h1_dir);
      div_dir.appendChild(p_dir_1);
      p_dir_1.appendChild(link);
      div_dir.appendChild(p_dir_2);
      div_dir.appendChild(p_dir_3);
      div_dir.appendChild(temporadas);
      

      }

  }

  function click(event){
    const class_temp = document.getElementsByClassName("temporada");
    var n = class_temp.length;

    for (var i=0; i<n; i++) {
        class_temp[i].style.display = "none";
    }
    console.log(class_temp);
    if ( Number(event.target.value.substring(3,4)) === 0 ){
        return
    }
    else {
        const section_temp = document.getElementById(event.target.value);
        section_temp.style.display = "block";
    }
}
