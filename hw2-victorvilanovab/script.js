
function add_items() {
    const items = document.querySelector(".items");
    const article = document.createElement("article");
    items.appendChild(article);
    for (let i = 0; i < TV_SHOWS.length; i++){

        // secao da serie
        const secao_serie = document.createElement("section");
        secao_serie.className = "serie";
        article.appendChild(secao_serie);

            // secao da imagem com seletor
            const secao_img = document.createElement("section");
            secao_img.className = "img";
            secao_serie.appendChild(secao_img);
            // div doluna
            const div_col1 = document.createElement("div");
            div_col1.className = "col1";
            secao_img.appendChild(div_col1);
        
                // imagem
                const newImage = document.createElement('img');
                newImage.src = TV_SHOWS[i]["image"];
                div_col1.appendChild(newImage);

                // selector
                const seletor = document.createElement('select');
                seletor.className = "wselect";
                seletor.addEventListener('change',click);
                seletor.style = "width:160px; height: 30px;";
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
                    seletor.appendChild(seasonsn);
                }
                div_col1.appendChild(seletor);

            // secao da titulo, descricao episodios
            const secao_text = document.createElement("section");
            secao_text.className = "text";
            secao_serie.appendChild(secao_text);
            // div doluna
            const div_col2 = document.createElement("div");
            div_col2.className = "col2";
            div_col2.id = "serie" + i;
            secao_text.appendChild(div_col2);

                // titulo
                const titulo = document.createElement("h1");
                titulo.textContent = TV_SHOWS[i]["name"];
                div_col2.appendChild(titulo);

                // link
                const plink = document.createElement("p");
                plink.className = "blue";
                const link = document.createElement("a");
                link.href = TV_SHOWS[i]["officialSite"];
                link.textContent = "Premiered at " + TV_SHOWS[i]["channel"] + ' on ' + TV_SHOWS[i]["premiered"] +' ('+ TV_SHOWS[i]["status"] + ") ";
                plink.appendChild(link);
                div_col2.appendChild(plink);

                //summary
                const summary = document.createElement("p");
                summary.className = "text";
                summary.textContent = TV_SHOWS[i]["summary"];
            div_col2.appendChild(summary);

                //genres
                const genres = document.createElement("p");
                genres.className = "genres";
                generos = TV_SHOWS[i]["genres"];
                genres.textContent = "Genres: ";
                for (let n=0; n < generos.length; n++ ){
                    const genn = document.createElement("em");
                    genn.textContent = " "+ generos[n] + " ";
                    genres.appendChild(genn);
                div_col2.appendChild(genres);
                }
    }
}

function add_episodes(){


    for (let i=0; i<TV_SHOWS.length; i++){

        const div_col2 = document.getElementById('serie' +i);
        console.log(div_col2);
        const section_temporadas = document.createElement('section');
        section_temporadas.className ="temporadas";
        div_col2.appendChild(section_temporadas);

        for (let temp=0; temp< TV_SHOWS[i]["seasons"].length; temp++){

            const section_temporada = document.createElement('section');
            section_temporada.className ="temporada";
            section_temporada.setAttribute('id',"s"+i+"t"+Number(temp+1));
            section_temporadas.appendChild(section_temporada);
            const h1_titulo = document.createElement('h1');
            h1_titulo.textContent = "Season 0" + Number(temp+1);
            h1_titulo.setAttribute('id','title_season');
            section_temporada.appendChild(h1_titulo);


            //checkbox check all
            const marca_all = document.createElement('p');
            marca_all.setAttribute('id',"marca_all");
            marca_all.textContent = "Check All";
            section_temporada.appendChild(marca_all);
            const tick_all = document.createElement("input");
            tick_all.type = "checkbox";
            tick_all.setAttribute('id',"tick_all_s"+i+"t"+temp);
            tick_all.addEventListener('change',check_all);
            tick_all.value = "s"+i+"t"+temp;
            marca_all.appendChild(tick_all);



            for(let ep=0; ep < TV_SHOWS[i]["seasons"][temp].length; ep++){
                const section_episode = document.createElement('section');
                section_episode.className ="episodes";
                section_temporada.appendChild(section_episode);
                    //div da imagem
                    const col_img = document.createElement('div');
                    col_img.setAttribute('id',"col_img");
                    section_episode.appendChild(col_img);
                    const img_ep = document.createElement('img');
                    img_ep.src = TV_SHOWS[i]["seasons"][temp][ep]["image"];
                    img_ep.setAttribute("id","img_ep");
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


function atualiza_timer() {
    var timer=0;
    console.log("popo");
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

function check_all() {
    for (let i=0; i < 3; i++){
        for (let temp=0; temp< TV_SHOWS[i]["seasons"].length; temp++) {
            const checkbox = document.getElementById("tick_all_s"+i+"t"+temp);
            if (checkbox.checked === true){
                var checkboxes = document.getElementsByName('s'+i+'t'+temp);
                for (var checkboxe of checkboxes) {
                    checkboxe.checked = this.checked;
                    atualiza_timer();
                }
               
            }
            else {
                var checkboxes = document.getElementsByName('s'+i+'t'+temp);
                for (var checkboxe of checkboxes) {
                    checkboxe.checked = false;
                    atualiza_timer();
                }
            }

        }
    }
}

add_items()
add_episodes()