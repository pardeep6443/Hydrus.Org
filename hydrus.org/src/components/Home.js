import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {        
    return (
        <div className="HydrusPage">
            <div className="HomeBg" style={{ width: "100%", height: '100%' }}>

                <br /><br /><br /><br /><br /><br /><br />
                <div class="container-fluid">

                    <div className="parallax-heading2" style={{ paddingLeft: 10, width: "50%", height: 500, background: 'rgba(0, 0, 0, 0.55)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 87, border: '1px #40434C solid', backdropFilter: 'blur(61px)', paddingTop: 60, marginLeft: 45 }}>
                        <div className="bb" style={{ width: "138%", paddingRight: 10, color: 'white', fontSize: 35, fontFamily: 'FONTSPRING DEMO - Integral CF Bold', fontWeight: '700', alignItems: "center", justifyContent: "center" }}>
                            Unleash the untapped power of your online empire with HYDRUS org.
                        </div>

                        <a href="#contact" style={{ color: "white" }}>
                            <div className="Group8" style={{ width: '100%', height: '100%', position: 'absolute', marginTop: 30, marginLeft: 20 }}>
                                <div className="Rectangle3" style={{ width: 171, height: 36, left: 0, top: 0, position: 'absolute', background: '#496DDB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 55 }} />
                                <div className="ContactUs" style={{ left: 10, top: 6, position: 'absolute', color: 'white', fontSize: 17, fontFamily: 'FONTSPRING DEMO - Integral CF Bold', fontWeight: '700', wordWrap: 'break-word' }}>contact us</div>
                                <div className="Ellipse19" style={{ width: 32, height: 32, left: 136, top: 2, position: 'absolute', background: 'black', borderRadius: 9999 }} ><FiArrowUpRight style={{ fontSize: 25, marginTop: 2 }} /></div>
                            </div>
                        </a>
                    </div>
                </div><br /><br />
            </div>
        </div>

    )
}
export default Home;