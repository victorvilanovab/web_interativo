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
    this.containerElement.append(profile);
    
  }
}

// Create a new instante of the App class
// TODO(you): You must decide how to inform the class about
//            the container and the TV_SHOWS data.
