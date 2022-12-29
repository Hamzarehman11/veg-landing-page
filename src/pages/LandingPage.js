import React from "react";
import Header from "../components/Header";
import document from '../images/Document.png';
import shopping from '../images/Shopping.png';
import nature from '../images/Nature.png';
import location from '../images/Location.png';
import tick from '../images/tick.png';
import doctor from '../images/doctor.png';
import male from '../images/popout-img2.png';
import female from '../images/popout-img-1.png';
import girl from '../images/girl.png';
import baby from '../images/baby-img.png';
import star from '../images/star.png';
import man from '../images/man.png';
import heart from '../images/heart.png';
import commas from '../images/commas.png';
import nike from '../images/nike.png';
import Footer from "../components/Footer";
import Button from "../components/Button";


export default function LandingPage() {


    const cardDetails = [
        {
            heading: 'Fill the form at the beginning.',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
            icon: document,
        },
        {
            heading: 'Select the products you want.',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
            icon: nature,
        },
        {
            heading: 'Add products to the cart.',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
            icon: shopping,
        },
        {
            heading: 'Get delivered to your door step.',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
            icon: location,
        },
    ]

    const aboutCard = [
        {
            count: '850',
            header: 'Professional Team',
            text: 'Highly Verified'
        },
        {
            count: '1500+',
            header: 'Happy Customers',
            text: 'Got their treatments'
        },
        {
            count: '95.8%',
            header: 'Positive Feedback',
            text: 'From our customers'
        }
    ]

    const cardList = cardDetails.map((card) => {
        return (
            <div key={card.heading} className={`card-comp p-4  ${card === cardDetails[0] ? 'card-comp-hover' : ''}`}>
                <div
                    className={`card-icon d-flex justify-content-center align-items-center ${card !== cardDetails[0] ? 'card-icon-hover' : ''} `}>
                    <img className={'card-icons-size'} src={card.icon} alt="icon"/>
                </div>
                <h6 className={'card-heading mt-4'}>{card.heading}</h6>
                <p className={'card-para mt-3'}>{card.para}</p>
            </div>
        )
    })


    const aboutList = aboutCard.map((elem) => {
        return (
            <div className={'about-comp d-flex flex-column justify-content-center align-items-center '}>
                <h3 className={'font-size-36 font-weight-900 font-family-basic-commercial'}>{elem.count}</h3>
                <h4 className={'font-size-20 font-weight-700 font-family-basic-commercial mt-2'}>{elem.header}</h4>
                <p className={'font-size-13 font-weight-400 font-family-basic-commercial color-6C6C6C'}>{elem.text}</p>
            </div>
        )
    });


    return (

        <div className={'landing-page'}>
            <Header/>

            <div className="row service-sec">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="pill d-flex justify-content-center align-items-center">
                        <span>Services</span>
                    </div>
                    <div className={'service-heading mt-4'}>
                        <span>Easy steps to get your product</span>
                    </div>
                    <div className={'service-text mt-3'}>
                        <span>The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</span>
                    </div>
                    <div className={'service-card'}>
                        <div className="row">
                            <div className="col-12 d-flex gap-5">
                                {cardList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row product-sec">
                <div className="col-12">

                    <div className="row">
                        <div className="col-6">
                            <div className="pill d-flex justify-content-center align-items-center">
                                <span>Products</span>
                            </div>
                            <div className={'service-heading mt-2'}>
                                <span>We are offering specialist certified products.</span>
                            </div>
                            <div className={'product-text  mt-3'}>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                            <div className={'d-flex align-items-center gap-2 mt-4'}>
                                <img src={tick} alt="tick"/>
                                <span className={'color-8C8C8C font-size-16'}>You can find the product easily.</span>
                            </div>
                            <div className={'d-flex align-items-center gap-2 mt-2'}>
                                <img src={tick} alt="tick"/>
                                <span className={'color-8C8C8C font-size-16'}>Latest and healthy products.</span>
                            </div>
                            <div className={'mt-5'}>
                                <Button yellowBtn largeBtn>See Products ➞</Button>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className={'doctor'}>
                                <img src={doctor} alt=""/>
                            </div>
                            <div className={'mini-tick-popout d-flex justify-content-center align-items-center'}>
                                <div
                                    className={'mini-tick-popout-doc d-flex justify-content-center align-items-center'}>
                                    <img src={nike} alt="nike"/>
                                </div>
                            </div>
                            <div className={'product-popout p-3'}>
                                <div className="row">
                                    <div className="col-12">

                                        <div className="row">
                                            <div className="col-8 d-flex flex-column">
                                                <span
                                                    className={'font-size-10-5 font-weight-700 font-family-basic-commercial'}>Product verified by</span>
                                                <span
                                                    className={'font-size-10  color-9B9B9B'}>Selected specialists</span>
                                            </div>
                                            <div className="col-2 d-flex">
                                                {/*later see*/}
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-12 d-flex align-items-center gap-3">
                                                <div>
                                                    <img src={male} alt="male"/>
                                                </div>
                                                <div className={'d-flex flex-column'}>
                                                    <span
                                                        className={'font-size-9 font-weight-700 font-family-basic-commercial letterspacing-1'}>Dr. James Jones</span>
                                                    <span
                                                        className={'color-6C6C6C9C font-size-9 font-weight-700 font-family-basic-commercial letterspacing-1'}>Specialist</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 d-flex align-items-center gap-3">
                                                <div>
                                                    <img src={female} alt="male"/>
                                                </div>
                                                <div className={'d-flex flex-column'}>
                                                    <span
                                                        className={'font-size-9 font-weight-700 font-family-basic-commercial letterspacing-1'}>Dr. James Jones</span>
                                                    <span
                                                        className={'color-6C6C6C9C font-size-9 font-weight-700 font-family-basic-commercial letterspacing-1'}>Specialist</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <div
                                                    className={'see-more-design d-flex justify-content-center align-items-center'}>
                                                    <span
                                                        className={'font-size-12 font-weight-400 font-family-poppins'}>See More</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row feedback-sec">
                <div className="col-12">

                    <div className="row">
                        <div className="col-7">
                            <div className={'girl-image'}>
                                <img src={girl} alt="girl"/>
                            </div>
                            <div className={'feedback-popout p-4'}>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={baby} alt="baby"/>
                                    </div>
                                    <div className="col-8 mx-1 mt-1">
                                        <div className="row">
                                            <div className="col-8 d-flex flex-column justify-content-center">
                                                <span
                                                    className={'font-size-16 font-weight-700 font-family-basic-commercial'}>Anne Marie</span>
                                                <span className={'font-size-10 font-family-poppins color-909090'}>Since 2021</span>
                                                <div className={'d-flex gap-1 mt-2'}>
                                                    <img src={star} alt="star"/>
                                                    <img src={star} alt="star"/>
                                                    <img src={star} alt="star"/>
                                                    <img src={star} alt="star"/>
                                                    <img src={star} alt="star"/>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <img className={'commas-img'} src={commas} alt="commas"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <span
                                            className={'font-size-12 font-weight-400 font-family-DM-SANS color-9B9B9B letterspacing-0-5 line-height'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</span>
                                    </div>
                                </div>
                            </div>


                            <div className={'feedback-card d-flex justify-content-start align-items-center p-4'}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={man} alt='man'/>
                                    </div>
                                    <div className="col-8">
                                        <div className={'line1 mt-1'}></div>
                                        <div className={'line2 mt-1'}></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            className={'heart-popout d-flex justify-content-center align-items-center'}>
                                            <img src={heart} alt="heart"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="col-5">
                            <div className={'d-flex justify-content-end'}>
                                <div className="pill d-flex justify-content-center align-items-center">
                                    <span>Feedbacks</span>
                                </div>
                            </div>
                            <div className={'service-heading mt-2 text-end'}>
                                <span>Read the best reviews from our users.</span>
                            </div>
                            <div className={'product-text  mt-3 text-end'}>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                            <div className={'mt-5 text-end'}>
                                <Button yellowBtn largeBtn>See More ➞</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row about-sec">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="pill d-flex justify-content-center align-items-center">
                        <span>Services</span>
                    </div>
                    <div className={'service-heading mt-4'}>
                        <span>Our Long Journey</span>
                    </div>
                    <div className={'service-text mt-3'}>
                        <span>The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</span>
                    </div>
                    <div className={'about-card mt-5'}>
                        <div className="row mt-3">
                            <div className="col-12 d-flex gap-5">
                                {aboutList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row newsletter-sec">
                <div className="col-12 d-flex justify-content-center">
                    <div className={'newsletter-content d-flex flex-column justify-content-center align-items-center'}>
                        <div className="row">
                            <div className="col-12">
                                <h4 className={'font-size-48 font-weight-600 font-family-Plantain'}>Sign Up For
                                    Our News Letter</h4>
                                <div>
                                    <div className="row mt-5">
                                        <div className="col-8 text-center">
                                            <input className={'newsletter-input px-3'} type="text"
                                                   placeholder={'✉  Put your email address here...'}/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <Button yellowBtn smallBtn>Send</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}