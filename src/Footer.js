import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (

      <footer>

        <span className="footerLink">
          <a href="/" id="portfolio-link">by Mayumi Ishino</a>
        </span>

        <span className="footerLink">
          <a href="/" id="github-link">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </span>

      </footer>
    );
  }
}
