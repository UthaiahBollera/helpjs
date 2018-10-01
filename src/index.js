import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
let _hints = [
  {
    element: "app1",
    hint: `<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia
            delectus cum illo maiores laborum earum culpa obcaecati commodi
            quaerat? Neque quo nulla voluptatem. Quos asperiores nesciunt error
            dolore reiciendis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            voluptate cum aspernatur quia placeat, quas in sapiente. Repudiandae
            assumenda esse explicabo quaerat facilis, corporis officia
            repellendus, quam cupiditate, harum accusamus?
          </p>`,
    hintPosition: "left"
  },
  {
    element: "app2",
    hint: `<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia
            delectus cum illo maiores laborum earum culpa obcaecati commodi
            quaerat? Neque quo nulla voluptatem. Quos asperiores nesciunt error
            dolore reiciendis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            voluptate cum aspernatur quia placeat, quas in sapiente. Repudiandae
            assumenda esse explicabo quaerat facilis, corporis officia
            repellendus, quam cupiditate, harum accusamus?
          </p>`,
    hintPosition: "left"
  }
];

var HelpContent = (function() {
  class Event {
    constructor() {
      this.eventBus = {};
    }

    on(eventName, callback = () => {}) {
      if (!this.eventBus[eventName]) {
        this.eventBus[eventName] = [];
      }
      this.eventBus[eventName].push(callback);
    }

    off(eventName = "") {
      delete this.eventBus[eventName];
    }

    dispatch(eventname, ...data) {
      let event = this.eventBus[eventname];
      if (event && event.length) {
        event.forEach(_callback => {
          _callback(...data);
        });
      }
    }
  }

  class HelpContent extends Event {
    constructor(options) {
      super();
      this.hints = [];
    }

    setHints(hints = []) {
      this.hints = hints;
    }

    addHints(hint = null) {
      hint && this.hints.push(hint);
      this.dispatch("hintsAdded", hint);
    }

    addHintHTML(targetElement, hint, index) {
      let innerText = targetElement.innerText;
      targetElement.innerHTML = `${innerText} 
        <div class="tooltip help-tooltip" id="${index}">
        <span class="help-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="1 1 511.99999 511.99999"
            width="20px"
          >
            <g>
              <path
                d="m80 16h352c35.347656 0 64 28.652344 64 64v352c0 35.347656-28.652344 64-64 64h-352c-35.347656 0-64-28.652344-64-64v-352c0-35.347656 28.652344-64 64-64zm0 0"
                fill="hsl(212, 100%, 44%)"
                data-original="#BDDBFF"
                class="active-path"
                data-old_color="#57a5ff"
              />
              <g fill="#3d9ae2">
                <path
                  d="m432 0h-352c-44.160156.0507812-79.9492188 35.839844-80 80v352c.0507812 44.160156 35.839844 79.949219 80 80h352c44.160156-.050781 79.949219-35.839844 80-80v-352c-.050781-44.160156-35.839844-79.9492188-80-80zm48 432c0 26.507812-21.488281 48-48 48h-352c-26.507812 0-48-21.488281-48-48v-352c0-26.507812 21.488281-48 48-48h352c26.507812 0 48 21.488281 48 48zm0 0"
                  data-original="#000000"
                  fill="#F0EFEF"
                  data-old_color="#F0EDED"
                />
                <path
                  d="m256 96c-52.996094.054688-95.945312 43.003906-96 96h32c0-35.347656 28.652344-64 64-64 35.347656-.035156 64.027344 28.589844 64.0625 63.9375.027344 28.300781-18.535156 53.257812-45.648438 61.375-20.402343 5.9375-34.425781 24.640625-34.414062 45.886719v52.800781h32v-52.800781c.0625-7.09375 4.789062-13.300781 11.617188-15.246094 50.78125-15.234375 79.601562-68.75 64.367187-119.535156-12.183594-40.621094-49.578125-68.433594-91.984375-68.417969zm0 0"
                  data-original="#000000"
                  fill="#F0EFEF"
                  data-old_color="#F0EDED"
                />
                <path
                  d="m240 384h32v32h-32zm0 0"
                  data-original="#000000"
                  fill="#F0EFEF"
                  data-old_color="#F0EDED"
                />
              </g>
            </g>
          </svg>
        </span>
        <span class="tooltiptext">
        ${hint.hint}
        </span>
      </div>
        `;
    }

    renderHints() {
      this.hints.forEach((hint, index) => {
        var targetElement = document.getElementById(hint.element);
        console.log(targetElement);
        this.addHintHTML(targetElement, hint, index);
      });
    }
  }
  return new HelpContent();
})();

function App() {
  return (
    <div className="App">
      <div>
        <h2 id="app1">App Configuration</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>

        <h2 id="app2">App Configuration</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>

        <h2 id="app3">App Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>

        <h1>App Channels</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          laudantium tempora sint sequi modi hic consequuntur, voluptate
          distinctio ea. Vel quam repudiandae neque in facilis? Nobis officiis
          qui ex odit.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

HelpContent.setHints(_hints);
HelpContent.renderHints();
