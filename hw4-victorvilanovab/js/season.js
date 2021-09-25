// TODO(you): Modify the class in whatever ways necessary to implement
// the season behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
// - Include and bind eventListeners

class Season {
  constructor(containerElement, TV_SHOWS, i) {
    this.containerElement = containerElement;
    
    for (let temp=0; temp< TV_SHOWS[i]["seasons"].length; temp++){


      const section_temporada = document.createElement('section');
      section_temporada.className ="temporada";
      section_temporada.setAttribute('id',"s"+n_series_add+"t"+Number(temp+1));
      this.containerElement.appendChild(section_temporada);
      const h1_titulo = document.createElement('h1');
      h1_titulo.textContent = "Season 0" + Number(temp+1);
      h1_titulo.setAttribute('id','title_season');
      section_temporada.appendChild(h1_titulo);


      //checkbox check all
      const marca_all = document.createElement('p');
      marca_all.className = "p_checkbox";
      marca_all.textContent = "Check All";
      section_temporada.appendChild(marca_all);
      const tick_all = document.createElement("input");
      tick_all.type = "checkbox";
      tick_all.setAttribute('id',"tick_all_s"+n_series_add+"t"+temp);
      tick_all.className = "tick_all_class";
      tick_all.addEventListener('change',check_all);
      tick_all.value = "s"+n_series_add+"t"+temp;
      marca_all.appendChild(tick_all);
      const label = document.createElement('label');
      label.setAttribute('for',"tick_all_s"+n_series_add+"t"+temp);
      const eye_img = document.createElement('img');
      eye_img.src = '../images/eye-gray.png';
      eye_img.setAttribute('id',"img_tick_all_s"+n_series_add+"t"+temp);
      eye_img.className = "eye_class_img";
      label.appendChild(eye_img);
      marca_all.appendChild(label);

      this.containerElement.append(section_temporada);


      for(let ep=0; ep < TV_SHOWS[0]["seasons"][temp]['episodes'].length; ep++){
        const container_section_temporada = document.querySelector("#s"+n_series_add+"t"+Number(temp+1))
        const draw_ep = new Episode(container_section_temporada, TV_SHOWS, i, temp, ep);
        console.log("TESTE SE TA ENTRANDO");

      }

    }

  }

}

function check_all() {
  for (let i=0; i < n_series_add+1; i++){
      for (let temp=0; temp< TV_SHOWS[i]["seasons"].length; temp++) {
          const checkbox = document.getElementById("tick_all_s"+i+"t"+temp);
          if (checkbox.checked === true){
              var checkboxes = document.getElementsByName('s'+i+'t'+temp);
              for (var checkboxe of checkboxes) {
                  checkboxe.checked = this.checked;
                  const change_label = document.getElementById("img_tick_all_s"+i+"t"+temp);
                  change_label.src = "../images/eye-green.png";

                  for(let ep=0; ep < TV_SHOWS[i]["seasons"][temp]['episodes'].length; ep++){
                    const episodio = '______s' + i + 't' + Number(temp+1) + 'e' + Number(ep+1);
                      put_check_image(episodio);
                  }

                  atualiza_timer();
              }
             
          }
          else {
              var checkboxes = document.getElementsByName('s'+i+'t'+temp);
              for (var checkboxe of checkboxes) {
                  checkboxe.checked = false;
                  const change_label = document.getElementById("img_tick_all_s"+i+"t"+temp);
                  change_label.src = "../images/eye-gray.png";

                  for(let ep=0; ep < TV_SHOWS[i]["seasons"][temp]['episodes'].length; ep++){
                    const episodio = '______s' + i + 't' + Number(temp+1) + 'e' + Number(ep+1);
                      remove_check_image(episodio);

                  }



                  atualiza_timer();
              }
          }

      }
  }
}