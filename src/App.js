/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const FormikPage = () => (<SignupForm />);

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

const AControlledForm = ({ submit }) => {
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
      <AControlledForm submit={Submit} />
      <p>You selected:</p>
      <div>
        {selectedLetter}
      </div>
    </>
  );
};

const UncontrolledForm = ({ submitHelper }) => {
  const input = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    submitHelper(input.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Some Value:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const UncontrolledPageWrapper = ({ children }) => (ReactDOM.createPortal(
  children,
  document.getElementById('alt'),
));
const UncontrolledPage = () => {
  const [UValue, setUValue] = useState(null);

  const submitExtractor = (value) => {
    setUValue(value);
  };

  return (
    <>
      <h1>Uncontrolled</h1>
      <div>
        Extracted form value:
        {UValue}
      </div>
      <UncontrolledForm submitHelper={submitExtractor} />
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
                  <Link to="/interactive">A controlled form</Link>
                </li>
                <li>
                  <Link to="/formik">A formik form</Link>
                </li>
                <li>
                  <Link to="/uncontrolled">An uncontrolled form</Link>
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
                <Route path="/formik">
                  <FormikPage />
                </Route>
                <Route path="/uncontrolled">
                  <UncontrolledPageWrapper>
                    <UncontrolledPage />
                  </UncontrolledPageWrapper>
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
