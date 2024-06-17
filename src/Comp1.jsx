import './App.css';
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/scss/_button-group.scss";
function Abigail() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <button > this </button>
                </div>

            </div>
        </div>
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default Abigail;
