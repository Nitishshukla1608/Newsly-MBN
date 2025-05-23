import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      darkMode: false,

    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
    
  };

  render() {
    const { darkMode } = this.state;
let {toggleAppMode} = this.props
    return (

      <div>
        <nav
          className={`navbar navbar-expand-lg ${
            this.state.darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"
          }`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <b>
                <h4>Newsly</h4>
              </b>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>

              <button
                className={`btn ${darkMode ? "btn-light" : "btn-dark"} ms-auto`}
                onClick={()=>{
                  this.toggleDarkMode()
                  this.props.toggleAppMode()
                }}
                title="Toggle Dark Mode"
              >
                <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
