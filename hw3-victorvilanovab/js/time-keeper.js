// TODO(you): Modify the class in whatever ways necessary to implement
// the timeKeeper behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
// - Include and bind eventListeners
// - You may send the total time computation function as a callback
//   to other classes

class TimeKeeper {
  constructor(containerElement) {
    this.containerElement = containerElement;

    const section = document.createElement('section');
    section.className = "time";

      const h1 = document.createElement('h1');
      h1.textContent = "Total Time Spend";
      const h12 = document.createElement('h1');
      h12.setAttribute('id',"total-time-spent");
      h12.textContent = "0 days, 0 hours, 0 minutes";


    section.appendChild(h1);
    section.appendChild(h12);
    this.containerElement.append(section);


  }
}
