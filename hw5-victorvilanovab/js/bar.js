class Bar {
  constructor(container, dados) {

    container.innerHTML = "";

    container.style.display = "block";
    
    this._render(container, dados);

  }

  _render(container, data) {
    const titulo = document.createElement("h1");
    titulo.textContent = "GRAFICO BARRA";
    container.append(titulo);



    const width = 800;
    const height = 400;
    const margin = { top: 50, bottom: 50, left: 50, right: 50 };

    const svg = d3.select('.graphics')
  .append('svg')
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr('viewBox', [0,0, width,height]);

  const x = d3.scaleBand().domain(d3.range(data.lenght))
  .range([margin.left, width - margin.right])
  .padding(0.1);

  const y = d3.scaleLinear()
  .domain([0,100])
  .range([height - margin.bottom, margin.top]);

  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll("rect")
    .data(data)
    .join('rect')
    .attr('x',5)
    .attr('y', 5)
    .attr('height', 5)
    .attr('widht', x.bandwidth())


  svg.node();








  }

  update(dados) {
    
  }
}