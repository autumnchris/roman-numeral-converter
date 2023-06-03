import Header from './modules/Header';
import Footer from './modules/Footer';
import Converter from './modules/Converter';

class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.converter = new Converter();
    this.renderApp();
  }

  // Event listeners
  events() {
    document.addEventListener('keyup', event => {
      const element = event.target;
      element.matches('#num-value') ? this.converter.displayResult(document.getElementById('num-value').value) : null;
   });

   document.addEventListener('submit', event => {
     const element = event.target;
     element.matches('.converter-form') ? event.preventDefault() : null;
   });
  }

  // DOM methods
  renderApp() {
    this.header.renderHeader('#app');
    this.renderMain('#app');
    this.footer.renderFooter('#app');
    this.converter.renderConverterForm('main');
    this.events();
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;