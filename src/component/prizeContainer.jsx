import React from 'react'
import cup from './images/1.png';
import award from './images/2.png'
const priceContainer = () => {
    return (
        <div>

            <div className="container mt-4 pt-5">
                <div className="row">


                    <div className="col-lg-5">


                        <div className="view overlay mb-3">
                            <img className="img-fluid mx-auto" src={cup} alt="..." />
                            <a href="#home">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-7 mb-4 align-self-center text-center justify text-lg-left ">

                        <h5 className="h5 mb-2 pt-4">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                        <p className="mb-4">
                            <li className="text-justify">
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions,
                                     as trustworthy products for various projects across the globe to save energy.</li>
                            <li className="text-justify">
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient
                                    pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </p>

                        <div className="view overlay mb-2">
                            <img className="img-fluid mx-auto" src={award} alt=".." />
                            <a href="#home">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <p className="mb-4 text-justify">
                            Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
                            Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                            </p>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default priceContainer
