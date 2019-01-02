import React, {Component, Fragment} from "react";
import {MDBBtn, MDBInput} from "mdbreact";

class profileChangePassword extends Component{
    render(){
        return(
            <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <MDBInput type="password" label="Old Password" value="" />
                </div>

            </div>

            <div className="row">
                <div className="col-md-6">
                    <MDBInput type="password" label="New Password" value="" />
                    <MDBBtn size="sm" color="primary" type="button" >Change Password</MDBBtn>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default profileChangePassword;