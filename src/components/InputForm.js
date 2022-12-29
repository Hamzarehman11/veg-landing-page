import React from "react";


export default function InputForm() {

    return (
        <div className={'input-main d-flex flex-column justify-content-center align-items-center gap-5'}>
            <div className="row">
                <div className="col-12">
                    <h3>Please Enter Your Details</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center gap-3">
                    <div>
                        <p className={'input-labels'}>1-First Name</p>
                        <input type="text" className={'form-input'}/>
                    </div>
                    <div>
                        <p className={'input-labels'}>2-Second Name</p>
                        <input type="text" className={'form-input'}/>
                    </div>
                    <div>
                        <p className={'input-labels'}>3- Phone Number</p>
                        <input type="text" className={'form-input'}/>
                    </div>
                    <div>
                        <p className={'input-labels'}>4- Password</p>
                        <input type="text" className={'form-input'}/>
                    </div>
                    <div>
                        <p className={'input-labels'}>5- Confirm Password</p>
                        <input type="text" className={'form-input'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}