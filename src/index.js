import { Liquid } from 'liquidjs';

const engine = new Liquid({
  root: 'views/', // root for layouts/includes lookup
  extname: '.liquid', // used for layouts/includes, defaults ""
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('div');
  engine
    .renderFile('test', { headerName: 'header2' }) // will read and render `views/hello.liquid`
    .then((res) => (container.innerHTML = res)); // outputs "Alice"
});
