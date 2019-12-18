import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Logo</a>


        </nav>
      </div>
      <div className="mainpage">
        <div className="sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Introduction</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="page-content">
          <h3 className="page-header">JS-Variables</h3>
          <div class="card">
            <div class="card-body">
              <div className="page-content-div">
                <h6>What is variable ?</h6>
                <p>  Variables are the base of javascript.It will used for storing the values,we can declare the values initialy  or
                   store the final result values to that variables and get that.
                  </p>
                <b>Notes:</b>
                Variables will vary any time it is not a static one.
               </div>
              <div className="page-content-div">
                <h6>What is Primitives?</h6>
                <p>Data types is called as primitives.there are six types of data types are there.</p>
                <ol>
                  <li>Number</li>
                  <li>String</li>
                  <li>Boolean</li>
                  <li>Symbol</li>
                  <li>Null</li>
                  <li>Undefind</li>
                </ol>
              </div>
              <div className="page-content-div">
                <h6>Find which type of variable it is?</h6>
                <p></p>
              </div>
              <div className="page-content-div">
                <h6>Types of variable?</h6>
                <ol>
                  <li>
                    <b>Global Variable</b>
                    <p>Global variable declare in one place and we can take the values in all places of js.
                       we can change the values in any function.
                        </p>
                  </li>
                  <li>
                    <b>Local Variable</b>
                    <p>Local variables are declare inside the function and we can call the variables inside the function.
                        </p>
                  </li>
                </ol>
              </div>
              <div className="page-content-div">
                <h6> Merits and demerits of global variable?</h6>
                <p></p>
              </div>
              <div className="page-content-div">
                <h6> why we need local variable?</h6>
                <p></p>
              </div>
              <div className="page-content-div">
                <h6> How to declare each Data types in different ways. give some example?</h6>
                <p></p>
              </div>
              <div className="page-content-div">
                <h6>Hoisting?</h6>
                <p>In javascript hoisting is a basic way of writing.In this way all declaration are move top of the script</p>
              </div>
              <div className="page-content-div">
                <h6>Difference between null and undefined</h6>
                <p>"undefined" means this value does not exist. typeof returns "undefined"</p>
                <p>"null" means this value exists with an empty value. When you use typeof to test for "null"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default App;