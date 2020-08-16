/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const About = () => (
  <>
    <h2>About</h2>
    <p>I am interesting</p>
  </>
);

const Main = () => (
  <>
    <h2>Main</h2>
    <p>Welcome</p>
  </>
);

const Contact = () => (
  <>
    <h2>Contact</h2>
    <p>bob@throwback.com</p>
  </>
);

const AForm = ({ submit }) => {
  const [letter, setLetter] = useState(null);
  const updateForm = (e) => {
    setLetter(e.target.value);
  };
  return (
    <>
      <div style={{ borderStyle: 'solid', padding: '5px', margin: '5px' }}>
        <h2>Select a letter</h2>
        <select
          onChange={updateForm}
          value={letter}
        >
          <option>A</option>
          <option>B</option>
        </select>
      </div>

      <button disabled={letter === null} type="button" onClick={() => submit(letter)}>Submit</button>
    </>
  );
};
const Interactive = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const Submit = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <>
      <AForm submit={Submit} />
      <p>You selected:</p>
      <div>
        {selectedLetter}
      </div>
    </>
  );
};

function App() {
  return (
    <div>
      <h1 className="text-primary">Throwback</h1>

      <Router>
        <div>
          <div className="row">
            <div className="col-3">
              <ul style={{ listStyle: 'none' }}>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/interactive">A form</Link>
                </li>
              </ul>
            </div>

            <div className="col-9">

              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/interactive">
                  <Interactive />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
