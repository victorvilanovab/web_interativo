/**
 * Wrap a text with the given "element".
 */
 function wrapText(element, text) {
  const htmlNode = document.createElement(element);
  htmlNode.textContent = text;
  return htmlNode;
}

/**
 * Wrap an HTML with the given "element".
 */
 function wrapHTML(element, html) {
  const htmlNode = document.createElement(element);
  htmlNode.innerHTML = html;
  return htmlNode;
}

/**
 * Create an "img" node with "src" and "alt" attributes.
 */
function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

/**
 * Create an "a" node with "href" attribute.
 */
function createLink(text, url) {
  const link = wrapText('a', text);
  link.href = url;
  return link;
}

/**
 * Change the date format from YYYY-MM-DD to DD/MM/YYYY.
 */
function formatDate(dateStr) {
  const dateList = dateStr.split('-');
  return `${dateList[2]}/${dateList[1]}/${dateList[0]}`;
}

/**
 * Format the episode title as SxxExx: Name
 */
function formatEpisodeTitle(season, episode, name) {
  // Transforms season in String, then add zeros at the beggining until
  // the number of chars is 2. Therefore, season=2 becomes "02".
  if (!episode) {
    return `Special: ${name}`;
  }
  
  const seasonStr = String(season).padStart(2, '0');
  const episodeStr = String(episode).padStart(2, '0');
  return `S${seasonStr}E${episodeStr}: ${name}`;
}


function minutesToString(minutes) {
  let newTime = minutes;
  const days = Math.floor(Math.floor(newTime/60)/24);
  newTime -= days*24*60;
  const hours = Math.floor(newTime/60);
  newTime -= hours*60;
  return `${days} days, ${hours} hours, ${newTime} minutes`;
}


function arruma_data(){
  dados_graf = {};
  let series = new Set();
  let generos = new Set();
  for (i in data){
    series.add(data[i].substring(
      data[i].lastIndexOf("s") + 1, 
    data[i].lastIndexOf("t"))
    )
  }
  for (let i of series){
    for (let j of TV_SHOWS[i]["genres"]){
    generos.add(j);
    }
  }
  for (let i of generos){
    dados_graf[i] = 0;
  }

  for (let episodio of data){
    const n_serie = episodio.substring(
      episodio.lastIndexOf("s") + 1, 
      episodio.lastIndexOf("t"));
    const n_temporada = episodio.substring(
      episodio.lastIndexOf("t") + 1, 
      episodio.lastIndexOf("e"));
    const n_episode = episodio.substring(
      episodio.lastIndexOf("e") + 1);
    
    generos_do_episodio = TV_SHOWS[Number(n_serie)]["genres"];
    for (let genero of generos_do_episodio){
      dados_graf[genero] = dados_graf[genero] + TV_SHOWS[Number(n_serie)]["seasons"][Number(Number(n_temporada)-1)]["episodes"][Number(Number(n_episode)-1)]["runtime"];
    }
  }
  console.log(dados_graf);



  
}

function call_grafs(){
  for( (i) in dados_graf){
    dados_para_graf.push({"genero": i, "time": dados_graf[i]})
    console.log(dados_para_graf);
    //console.log(j);
  }
  grafs = document.querySelector(".graphics");
  const render_bar = new Bar(grafs, dados_graf);
  const render_donut = new Donut(grafs, dados_graf);
  console.log("sodifhasdf");
  console.log(dados_graf);
}
