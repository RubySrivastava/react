
import React from 'react'

const Header = () => {
    return (
        <header className='container-fluid'>
            <div>
            <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
                <a href="" className="navbar-brand active bg-col"><i className="list-inline-item"
                        aria-hidden="true"></i>Balloons Inc</a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=""
                                id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Category
                            </a>
                            <div className="dropdown-menu dropdown-bg" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item nav-link"
                                    href="">Birthday Vibes</a>
                                <a className="dropdown-item nav-link"
                                    href="">Celebration</a>
                                <a className="dropdown-item nav-link"
                                    href="">Love in air</a>
                                <a className="dropdown-item nav-link"
                                    href="">Baby Shower</a> 
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       </header>
    )
}
export default Header