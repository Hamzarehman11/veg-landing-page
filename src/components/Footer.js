import React from "react";
import instagram from "../images/insta.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";


export default function Footer() {

    return (
        <div className={'footer-main container-fluid'}>

            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-12">
                            <p className={'footer-logo'}>Logo</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className={'footer-phone-email'}>Call or Text:</span>
                            <span className={'mx-2'}>12345678</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className={'footer-phone-email'}>Email:</span>
                            <span className={'mx-2'}>company@email</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 d-flex gap-4">
                            <div
                                className={'footer-yellow-circle d-flex justify-content-center align-items-center'}>
                                <img src={facebook} alt={'fb-icon'}/>
                            </div>
                            <div
                                className={'footer-white-circle d-flex justify-content-center align-items-center'}>
                                <img src={twitter} alt={'twitter-icon'}/>
                            </div>
                            <div
                                className={'footer-yellow-circle d-flex justify-content-center align-items-center'}>
                                <img src={linkedin} alt={'linkedin-icon'}/>
                            </div>
                            <div
                                className={'footer-yellow-circle d-flex justify-content-center align-items-center'}>
                                <img src={instagram} alt={'instagram-icon'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10">
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="row">
                                <p className={'footer-nav-text'}>Quick Links</p>
                            </div>
                            <div className="row">
                                <span className={'footer-links'}>Home</span>
                                <span className={'footer-links'}>About Us</span>
                                <span className={'footer-links'}>Services</span>
                                <span className={'footer-links'}>Contact Us</span>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="row">
                                <p className={'footer-nav-text'}>Others</p>
                            </div>
                            <div className="row">
                                <span className={'footer-links'}>Home</span>
                                <span className={'footer-links'}>About Us</span>
                                <span className={'footer-links'}>Services</span>
                                <span className={'footer-links'}>Contact Us</span>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="row">
                                <p className={'footer-nav-text'}>Others</p>
                            </div>
                            <div className="row">
                                <span className={'footer-links'}>Home</span>
                                <span className={'footer-links'}>About Us</span>
                                <span className={'footer-links'}>Services</span>
                                <span className={'footer-links'}>Contact Us</span>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="row">
                                <p className={'footer-nav-text'}>Address</p>
                            </div>
                            <div className="row">
                                <p style={{lineHeight: '184%'}} className={'footer-links text-start'}>Lorem Ipsum is
                                    simply dummy text of the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <span className={'footer-rights-text'}>©Copyright 2022 by DPI_MEDIA - All right reserved.</span>
                </div>
            </div>
        </div>
    )
}