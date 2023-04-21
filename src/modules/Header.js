class Header {
  // DOM methods
  renderHeader(location) {
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>Roman Numeral Converter</h1>
      <h2>Convert a number to its Roman Numeral form</h2>
    `;
    document.querySelector(location).appendChild(header);
  }
}

export default Header;