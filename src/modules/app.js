import { Converter } from './converter';

const App = (() => {

  function renderApp() {
    document.getElementById('app').innerHTML = `
    <header>
      <h1>Roman Numeral Converter</h1>
      <h2>Convert a number to its Roman Numeral form</h2>
    </header>
    <main>
      <form>
        <div class="form-group">
          <input type="text" aria-label="input a positive integer" class="num-value" id="num-value" autofocus />
        </div>
      </form>
      <div class="result"></div>
    </main>
    <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

    document.addEventListener('keyup', () => {
       const element = event.target;
       element.matches('#num-value') ? Converter.displayResult(document.getElementById('num-value').value) : null;
    });
  }
  return {
    renderApp
  };
})();

export { App };
