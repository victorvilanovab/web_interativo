// TODO(you): Modify the class in whatever ways necessary to implement
// the episode behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
// - Include and bind eventListeners

class Episode {
  constructor(container, TV_SHOWS, i, temp, ep) {

    const section_episode = document.createElement('section');
                section_episode.className ="episodes";
                section_episode.addEventListener('pointerdown', startDrag);
                section_episode.addEventListener('pointermove', duringDrag);
                section_episode.addEventListener('pointerup', endDrag);
                section_episode.addEventListener('pointercancel', endDrag);
                section_episode.addEventListener('pointerdown', onThumbnailClick);
                section_episode.dataset.index = 'check_s'+ i + 't' + Number(temp+1) + 'e' + Number(ep +1);  
                container.appendChild(section_episode);
                    //div da imagem
                    const col_img = document.createElement('div');
                    col_img.setAttribute('id',"col_img");
                    section_episode.appendChild(col_img);
                    const img_check = document.createElement('img');
                    img_check.setAttribute('id','img_checked_s'+ i + 't' + Number(temp+1) + 'e' + Number(ep +1));
                    img_check.className = "img_checked";
                    col_img.appendChild(img_check);
                    const img_ep = document.createElement('img');
                    img_ep.src = TV_SHOWS[i]["seasons"][temp][ep]["image"];
                    img_ep.className = "img_episodios";
                    img_ep.setAttribute("id",'img_id_s'+ i + 't' + Number(temp+1) + 'e' + Number(ep +1));
                    col_img.appendChild(img_ep);
                    

                    //div do titulo / data / sinopse
                    const col_title = document.createElement('div');
                    col_title.setAttribute("id","col_title");
                    section_episode.appendChild(col_title)

                        //div checkbox+title
                        const div_box_t = document.createElement('div');
                        div_box_t.setAttribute('id','div_box');
                        col_title.appendChild(div_box_t);


                            //botao checkbox
                            const tick = document.createElement("input");
                            tick.type = "checkbox";
                            tick.setAttribute('id',"check_s"+i+"t"+Number(temp+1)+"e"+Number(ep+1));
                            tick.addEventListener('change',atualiza_timer);
                            tick.value = TV_SHOWS[i]["seasons"][temp][ep]["runtime"];
                            tick.className = "tick_dos_episodios_class";
                            tick.name = "s"+i+"t"+temp;
                            div_box_t.appendChild(tick); 

                            // title
                            const titulo = document.createElement('h1');
                            titulo.setAttribute("id", "episodes_title");
                            titulo.textContent = "S0"+Number(temp+1)+"E0"+Number(ep+1)+": "+TV_SHOWS[i]["seasons"][temp][ep]["name"];
                            div_box_t.appendChild(titulo);

                        //data realise
                        const realise = document.createElement("p");
                        realise.setAttribute("id","realise_date");
                        realise.textContent =  TV_SHOWS[i]["seasons"][temp][ep]["airdate"];
                        col_title.appendChild(realise);

                        //sinopse
                        const sinopse = document.createElement("p");
                        sinopse.setAttribute("id","sinopse_ep");
                        sinopse.textContent =  TV_SHOWS[i]["seasons"][temp][ep]["summary"];
                        col_title.appendChild(sinopse);

  }
}

function atualiza_timer() {
  var timer=0;
  for (let i=0; i<TV_SHOWS.length; i++){
      for (let temp=0; temp< TV_SHOWS[i]["seasons"].length; temp++){
          for(let ep=0; ep < TV_SHOWS[i]["seasons"][temp].length; ep++){
              const checkbox = document.getElementById('check_s'+i+"t"+Number(temp+1)+"e"+Number(ep+1));
              if (checkbox.checked === true) {
              timer = timer + Number(checkbox.value);
              }

        }
    }
  }


  d = Math.floor(timer/1440); // 60*24
  h = Math.floor((timer-(d*1440))/60);
  m = Math.round(timer%60);

  if(d>0){
      newtext = d + " days, " + h + " hours, "+m+" minutes";
  }else{
  newtext = h + " hours, "+m+" minutes";
}
  const time_spent = document.getElementById("total-time-spent");
  time_spent.textContent = newtext;
}



let originX = null;
function startDrag(event) {
  event.preventDefault();
  event.stopPropagation();

  originX = event.clientX;
  event.target.setPointerCapture(event.pointerId);
}

function duringDrag(event) {
  if (originX) {
    const currentX = event.clientX;
    const delta = currentX - originX;
    const element = event.currentTarget;
    element.style.transform = 'translateX(' + delta + 'px)';
  }
}

function endDrag(event) {
  if (!originX) {
    return;
  }

  const currentX = event.clientX;
  const delta = currentX - originX;
  const episodio = event.currentTarget.dataset.index;
  console.log(episodio+"-------------");
  originX = null;
  if (Math.abs(delta) > 100 & delta > 0) {
    console.log('check');
    const checkbox = document.getElementById(episodio);
    checkbox.checked = true;
    event.currentTarget.style.transform = '';
    put_check_image(episodio);

    atualiza_timer()
    return;
  }

  if (Math.abs(delta) > 100 & delta < 0) {
    console.log('not check');
    event.currentTarget.style.transform = '';
    const checkbox = document.getElementById(episodio);
    checkbox.checked = false;
    remove_check_image(episodio);

    atualiza_timer()
    return;
  }

}

function onThumbnailClick(event) {

}

function put_check_image(episodio) {
const imagem = document.getElementById('img_checked_'+episodio.substr(6));
console.log("mudando css img pra verde");
console.log('img_checked_'+episodio.substr(6)+"**************");
imagem.src = '../images/check.png';
imagem.style.display='block';
imagem.width = 250;
imagem.height = 140;
}

function remove_check_image(episodio){
  const imagem = document.getElementById('img_checked_'+episodio.substr(6));
  imagem.style.display='none';
}