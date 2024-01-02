import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Services.css";
const Services = () => {

    return (

        <div className="service-container">
            <div className="parallax-heading20" style={{ color: 'white', fontSize: 60, fontFamily: "Integral CF Regular", fontWeight: '700', textAlign: "center" }}><p>WHAT WE OFFER</p></div>
            <div class="card-group " style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
                <div class="card ">

                    <div class="card-body ">
                        <h5 class="card-title ">DEVELOP <FiArrowUpRight style={{ marginTop: -5, fontSize: 60 }} /></h5>
                        <p class="card-text" >We are committed to building high-quality websites and apps that are both functional and user-friendly. Specialized in web development and mobile app development for business owners. We have a team of experienced and skilled developers who can build any type of website or mobile app , from simple informational websites to complex e-commerce platforms. We can help you optimize your website and content for search engines, so that more potential customers can find you online.</p>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">DESIGN <FiArrowUpRight style={{ marginTop: -5, fontSize: 60 }} /></h5>
                        <p class="card-text">We are full-service digital agency that specializes in UI/UX design and graphic design for business owners. We have a team of experienced and creative designers who can help you create a digital presence that is both visually appealing and user-friendly. We understand that every business is different, so we take the time to understand your unique needs and goals before we begin any project. We will work with you to develop a design strategy that is aligned with your overall business objectives and that will help you achieve your desired results.</p>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">MARKETING <FiArrowUpRight style={{ marginTop: -5, fontSize: 60 }} /></h5>
                        <p class="card-text">We can help businesses of all sizes with social media marketing, organic marketing, and Google/Meta ads. We have a team of experienced and knowledgeable marketers who can develop and implement a customized marketing strategy that will help you achieve your business goals. We can help you create and manage your social media accounts, develop social media marketing campaigns, and create and share engaging content.</p>
                    </div>
                </div>
            </div>
            <div className="Rectangle4" style={{ width: '100%', height: '100%', background: 'rgba(73, 109, 219, 0.42)', borderRadius: 45, border: '1px #40434C solid', fontFamily: "Integral CF Regular" }} >
                <p style={{ width: '100%', color: 'white', fontSize: 15, fontWeight: '400', wordWrap: 'break-word', textAlign: "center", textTransform: "uppercase", paddingTop: 10 }}>know who you’re working with</p>
                <p style={{ width: '100%', height: '100%', color: 'white', fontSize: 15, fontWeight: '500', letterSpacing: 0.60, wordWrap: 'break-word', textTransform: "uppercase", paddingLeft: 10, textAlign: "center" }}> . designers . developers . problem solvers . creative thinkers . artistic innovators</p>
            </div>

            <br />
        </div>
    )
}
export default Services;