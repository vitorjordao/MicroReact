import React from './React/react';
import ReactDOM from './React/react-dom';

function App() {
  return (
    React.createElement("div", {
      className: "App"
    },
      React.createElement("header", {
        className: "App-header"
      },
        React.createElement("p", null, "Edit and save to reload. Test"),
        React.createElement("a", {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Learn React")
      )
    )
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit and save to reload. Test
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);
