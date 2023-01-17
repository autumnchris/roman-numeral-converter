import { Converter } from './Converter';

const App = (() => {

  function renderApp() {
    document.getElementById('app').innerHTML = `
    <header>
      <h1>Roman Numeral Converter</h1>
      <h2>Convert a number to its Roman Numeral form</h2>
    </header>
    <main>
      <form class="converter-form" novalidate>
        <div class="form-group">
          <input type="text" aria-label="input a positive integer" class="num-value" inputmode="numeric" id="num-value" autofocus />
        </div>
      </form>
      <div class="result"></div>
    </main>
    <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

    document.addEventListener('keyup', event => {
       const element = event.target;
       element.matches('#num-value') ? Converter.displayResult(document.getElementById('num-value').value) : null;
    });

    document.addEventListener('submit', event => {
      const element = event.target;
      element.matches('.converter-form') ? event.preventDefault() : null;
    });
  }
  return {
    renderApp
  };
})();

export { App };
