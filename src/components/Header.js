import React from "react";
import Button from "./Button";
import headphone from '../images/headphone.png'
import DialogBox from "./DialogBox";

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
            setOpen(false);
        }

    return (
        <div className={'header-main container-fluid'}>
            <div className="row mt-2">
                <div className="col-12">

                    <div className="row header-nav">
                        <div className="col-8">
                            <h2>Logo</h2>
                        </div>
                        <div className="col-4 text-end">
                            <div className="row">
                                <div className="col-8 text-end d-flex align-items-center justify-content-end">
                                    <p style={{fontSize: '16px', fontWeight: '700', marginTop: '10px'}}>Sign in</p>
                                </div>
                                <div className="col-4">
                                    <Button yellowBtn smallBtn onClick={handleClickOpen} >Sign Up</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row header-content">
                        <div className="col-12">
                            <div className="ellipse1"></div>
                            <div className="row">

                                <div className="col-6">
                                    <div className="row">
                                        <h1 className={'heading-text'}>We Always Provide Best Products</h1>
                                    </div>
                                    <div className="row mt-4">
                                        <p className={'para-text'}>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</p>
                                    </div>
                                    <div className="row mt-5">
                                        <Button yellowBtn largeBtn>Get Started</Button>
                                    </div>
                                </div>

                                <div className="col-6 header-img">
                                    <div className="ellipse2"></div>
                                    <div className="popout">
                                        <div className={'line1'}></div>
                                        <div className={'line2'}></div>
                                        <div className={'popout-img'}></div>
                                    </div>
                                    <div className="card-popout">
                                        <div className="row">
                                            <div
                                                className="col-12 d-flex flex-column justify-content-center align-items-center p-4">
                                                <div
                                                    className="help-icon d-flex justify-content-center align-items-center">
                                                    <img src={headphone} alt=""/>
                                                </div>
                                                <h6 className={'mt-2'}>24hr Support</h6>
                                                <p className={'text-center card-popout-text p-2'}>Lorem Ipsum is simply
                                                    dummy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <DialogBox open={open} handleClose={handleClose} />

        </div>
    )
}