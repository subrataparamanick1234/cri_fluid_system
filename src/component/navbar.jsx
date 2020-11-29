
import React from 'react'
import logo from './images/logo.png';
const navbar = () => {
    return (
        <div>


            <div className="container pt-0 mb-4">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">


                        <div className="brand-centered">
                            <a className="navbar-brand" href="#home">
                                <img src={logo} alt="Dispute Bills" />
                            </a>
                        </div>



                    </div>

                </nav>
            </div>
        </div>
    )
}

export default navbar
