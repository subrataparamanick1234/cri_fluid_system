import React from 'react'
import product from './images/3.png';
const productContainer = () => {
    return (
        <div>

            <p className="font-weight-bold  mt-3 p-4 pb-0 text-justify">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
            CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className="container my-5 py-5 z-depth-1 ">
                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

                    <div className="row d-flex justify-content-center">

                        <div className="col-lg-12 text-center">

                            <div className="view overlay z-depth-1-half">
                                <img src={product} className="img-fluid"
                                    alt="..." />
                                <a href="#Home">
                                    <div className="mask rgba-white-light"></div>
                                </a>

                            </div>
                            <p className="pt-3">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                        </div>


                    </div>



                </section>

            </div>
            <div className="container mt-3">
                <section className="text-center mb-2">
                    <hr className="line"></hr>
                    <p className="font-weight-medium col-md-12">
                        <h6 className="font-weight-bold">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
                        CHEMICALS & PROCESS <span className="vr"> &nbsp;</span> POWER <span className="vr"> &nbsp;</span> WATER & WASTE WATER <span className="vr"> &nbsp;</span> OILS & GAS <span className="vr"> &nbsp;</span> PHARMA <span className="vr"> &nbsp;</span> SUGARS & DISTILLERIES <span className="vr"> &nbsp;</span> PAPER & PULP <span className="vr"> &nbsp;</span> MARINE & DEFENCE <span className="vr"> &nbsp;</span> METAL & MINING <span className="vr"> &nbsp;</span> FOOD & BEVERAGE <span className="vr"> &nbsp;</span> PETROCHEMICAL & REFINERIES <span className="vr"> &nbsp;</span> SOLAR <span className="vr"> &nbsp;</span> BUILDING
                        <span className="vr"> &nbsp;</span> HVAC <span className="vr"> &nbsp;</span> FIRE <span className="vr"> &nbsp;</span> FIGHTING <span className="vr"> &nbsp;</span> AGRICULTURE & RESIDENTIAL
                    </p>
                </section>
            </div>


        </div>
    )
}

export default productContainer
