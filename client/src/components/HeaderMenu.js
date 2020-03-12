import React from 'react'

export const HeaderMenu=()=>{
    return (
      <nav>
        <div className="nav-wrapper">
          {/* <div className="container"> */}
            <a href="# " className="brand-logo left">
              <img src="/images/ico1.jpg" alt="Logo" style={{height:60}}/>
            </a>
            {/* <a href="# " className="button-collapse" data-activates="mobile-demo">
              <i className="material-icons">menu</i>
            </a> */}
            {/* <ul className="right hide-on-med-and-down"> */}
            <ul className="right">
              <li><a href="sass.html"><i className="material-icons">search</i></a></li>
              <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
            </ul>
            {/* <ul className="side-nav" id="mobile-demo">
              <li><a href="sass.html"><i className="material-icons">search</i></a></li>
              <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
            </ul> */}
          {/* </div> */}
        </div>
    </nav>
    )
}