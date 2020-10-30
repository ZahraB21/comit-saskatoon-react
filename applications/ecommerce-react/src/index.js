import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

function App() {
    return (
        <div class="container">
        <header class="page-header">
          <h1>Sports Store</h1>
          <button><a href="pages/signup.html">Sign Up</a></button>
        </header>
  
        <ul class="nav-links">
          <li>
            <button><a href="pages/watersports.html">Watersports</a></button>
          </li>
          <li>
            <button><a href="pages/soccer.html">Soccer</a></button>
          </li>
          <li>
            <button><a href="pages/basketball.html">Basketball</a></button>
          </li>
          <li>
            <button><a href="pages/hockey.html">Hockey</a></button>
          </li>
          <li>
            <button><a href="pages/Boardgames.html">Boardgames</a></button>
          </li>
        </ul>
  
        <section class="items">
          <ul class="items-list">
            <li>
              <img src="imgs/soccer/ball.png" alt="" />
              <h3>Soccer ball</h3>
              <div>$44.00</div>
              <p>The best soccer ball ever!</p>
              <button class="item" id="item-1">Add To Cart</button>
            </li>
            <li>
              <img src="imgs/watersports/tube.png" alt="" />
              <h3>Tubing raft</h3>
              <div>$624.00</div>
              <p>Have some extreme fun being pulled in this raft!</p>
              <button class="item">Add To Cart</button>
            </li>
            <li>
              <img src="imgs/Boardgames/woodenSet.png" alt="" />
              <h3>Chess board and pieces</h3>
              <div>$499.00</div>
              <p>Hand-crafted from the finest Mahoganey wood</p>
              <button>Add To Cart</button>
            </li>
            <li>
              <img src="imgs/soccer/shirtCanada.png" alt="" />
              <h3>Team Canada soccer jersey</h3>
              <div>$591.00</div>
              <p>
                Display your national pride with this authentic Team Canada soccer
                jersey!
              </p>
              <button>Add To Cart</button>
            </li>
            <li>
              <img src="imgs/watersports/sunglass.png" alt="" />
              <h3>Goggles</h3>
              <div>$396.00</div>
              <p>Top-of-the-line goggles for the most extreme of watersports!</p>
              <button>Add To Cart</button>
            </li>
          </ul>
        </section>
  
        <footer class="page-footer">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="mailto:sportsstore@store.com">sportsstore@store.com</a>
            </li>
            <li><a href="tel:+01-780-555-5555">780-555-5555</a></li>
          </ul>
        </footer>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));