// untill React v18
/*import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}*/

// since React v18
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App/>);

