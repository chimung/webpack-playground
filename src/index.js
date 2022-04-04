import './assets/scss/_bootstrap.scss';
import { Liquid } from 'liquidjs';

const engine = new Liquid({
  root: 'views/', // root for layouts/includes lookup
  extname: '.liquid', // used for layouts/includes, defaults ""
});

const reloadTemplate = (engine, templateConfig) => {
  const container = document.querySelector('div');
  engine
    .renderFile('main', templateConfig)
    .then((res) => (container.innerHTML = res));
};

document.addEventListener('DOMContentLoaded', () => {
  const headerSelector = document.querySelector('#headerSelector');
  let templateConfig = {};
  headerSelector.addEventListener('change', (e) => {
    templateConfig = {
      ...templateConfig,
      headerName: e.target.value,
    };

    reloadTemplate(engine, templateConfig);
  });
});
