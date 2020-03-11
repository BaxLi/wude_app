import React from 'react'
// import 'materialize-css'

export const HeaderMenu=()=>{
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="/#" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">menu</i>
            </a>

          </div>
        </nav>
    )
}