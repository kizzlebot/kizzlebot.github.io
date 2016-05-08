import React from 'react';
var $ = require('jquery');



export default class TOC extends React.Component {
  componentDidMount(){
    this.props.sections.forEach((e, i) => {
      $(this.refs[`toc-${i}`]).click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
      })
    });
  }
  render(){
    console.log(this.props.sections);
    return (
      <nav className="nav__wrapper" id="navbar-example">
        <ul className="nav">
          {this.props.sections.map((e, i) => {
            return (
              <li key={`toc-${i}`} role="presentation" className={(i == 0) ? 'active': ''}>
                <a href={`#section${i+1}`} ref={`toc-${i}`}>
                  <span className="nav__counter">0{`${i+1}`}</span>
                  <span className='span_title'> {e.title}</span>
                  <h3 className="nav__title">{`${e.title}`}</h3>
                  <p className="nav__body">
                    <strong>Timeline-style navigation</strong>.
                      Scroll down to see what happens, or click on a number in the nav.
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
