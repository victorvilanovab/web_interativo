// TODO(you): Modify the class in whatever ways necessary to implement
// the search results behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
// - Include and bind eventListeners

var episodes = {};
var n=0;
var n_series_add = 0;

class RenderSearch {
  constructor(season_id) {
    var constant_new_ep = [];
    n_series_add = n_series_add +1;

    var requestpromises = [];
    var url1 = season_id => `http://api.tvmaze.com/shows/${season_id}`;
    var url2 = season_id => `http://api.tvmaze.com/shows/${season_id}/seasons`;

    requestpromises.push(fetch(url1(season_id))
    .then(response => response.json()));

    requestpromises.push(fetch(url2(season_id))
    .then(response => response.json()));

    Promise.all(requestpromises).then( promises => {
      var jsonData = promises[0];
      jsonData["seasons"] = promises[1];
      
      var requestpromises2 = [];

      var url3 = id_episode => `http://api.tvmaze.com/seasons/${id_episode}/episodes`;
      for (let i=0; i < Number(Object.keys(jsonData["seasons"]).length); i++){
          requestpromises2.push(fetch(url3(jsonData["seasons"][i]['id']))
          .then(response => response.json()));
      }

      Promise.all(requestpromises2).then(promises2 => {

        for (let i=0; i < Number(Object.keys(jsonData["seasons"]).length); i++){
          jsonData["seasons"][i]["episodes"] = promises2[i];
        }
        constant_new_ep.push(jsonData);


      const box_article = document.getElementById('article_doc');
      const serie = new TVShow(box_article, constant_new_ep, n);
      const section_temporadas = document.createElement('section');
      const div_col2 = document.getElementById("serie"+n_series_add);
      div_col2.appendChild(section_temporadas);
      section_temporadas.setAttribute('id',"#temporadas_serie"+ n);
      const temporadass = new Season(section_temporadas, constant_new_ep, n);
      TV_SHOWS.push(constant_new_ep[0]);
      })
      
    })

    
  }

}
