!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=0)}([function(e,t,n){"use strict";var r=n(1);n(3),n(4),r.App.renderApp()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=n(2),u={renderApp:function(){document.getElementById("app").innerHTML='\n    <header>\n      <h1>Roman Numeral Converter</h1>\n      <h2>Convert a number to its Roman Numeral form</h2>\n    </header>\n    <main>\n      <form>\n        <div class="form-group">\n          <input type="text" aria-label="input a positive integer" class="num-value" id="num-value" autofocus />\n        </div>\n      </form>\n      <div class="result"></div>\n    </main>\n    <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; '+(new Date).getFullYear()+"</footer>",document.addEventListener("keyup",(function(){event.target.matches("#num-value")&&r.Converter.displayResult(document.getElementById("num-value").value)}))}};t.App=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={displayResult:function(e){var t,n;(t=document.querySelector(".roman-numeral"))&&document.querySelector(".result").removeChild(t),(n=document.querySelector(".error-message"))&&document.querySelector(".result").removeChild(n),e&&(!isNaN(e)&&e>=1&&e<=3999?function(e){var t=document.createElement("div");t.classList.add("roman-numeral"),t.innerHTML=e,document.querySelector(".result").appendChild(t)}(function(e){return[{symbol:"M",value:1e3},{symbol:"CM",value:900},{symbol:"D",value:500},{symbol:"CD",value:400},{symbol:"C",value:100},{symbol:"XC",value:90},{symbol:"L",value:50},{symbol:"XL",value:40},{symbol:"X",value:10},{symbol:"IX",value:9},{symbol:"V",value:5},{symbol:"IV",value:4},{symbol:"I",value:1}].reduce((function(t,n){for(;e>=n.value;)t+=n.symbol,e-=n.value;return t}),"")}(e)):function(){var e=document.createElement("p");e.classList.add("message","error-message"),e.innerHTML='<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> Please enter an integer that is greater than 0 and less than 4000.',document.querySelector(".result").appendChild(e)}())}};t.Converter=r},function(e,t,n){},function(e,t,n){}]);