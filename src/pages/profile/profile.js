import React, {Component} from "react";
import {MDBBtn} from "mdbreact";
import {connect} from 'react-redux';
// import _ from 'lodash';
import {getProfile} from '../../actions/profileAction';
import {getSkills} from '../../actions/skillsAction';
import {getSubmittedSkills, addSubmittedSkills, removeSubmittedSkills} from '../../actions/skillsSubmittedAction';

import Header from "../../components/header";
import NavbarPage from "../../components/sidebar";
import ProfilePhoto from "../profile/profilePhoto";
import ProfileField from "../profile/profileField";
import ProfileChangePassword from "../profile/profileChangePassword";
import ProfileSkills from "../profile/profileSkills";
import ProfileSpan from "../profile/profileSpan";

import "./profile.css";

class profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount(){
        let session_id = 1;
        this.props.getProfile(session_id);
        this.props.getSkills();
        this.props.getSubmittedSkills();
    }

    render(){  
        return(
            <div className="bgColor">
                <div className="container">
                    <Header />
                </div>

                <div className="container-flex">
                    <div className="flex-left">
                        <NavbarPage />
                    </div>

                    <div className="flex-right">
                        <div className="row content-outer">
                                <h1 className="col-md-8 content-title">Edit Profile</h1>
                                <div className="col-md-4">
                                    <div className="pull-right">
                                        <MDBBtn size="sm" type="submit" color="primary">Simpan</MDBBtn>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="content-in">Profile Photo</div>
                        <div className="photo row">
                            <ProfilePhoto />
                        </div>

                        <div className="content-in">Profile Information</div>
                        <ProfileField />

                        <div className="photo row">
                        <ProfileSkills />
                        </div>
                        <br />

                        <div className="row spanCuy">
                            <div className="col-md-12">
                            <ProfileSpan />
                            </div>
                        </div>

                        <div className="content-in cp-border">Change Password</div>
                        <ProfileChangePassword />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        profile: state.profile,
        skills: state.skills,
        skillsSubmitted: state.skillsSubmitted
    }
    
}

export default connect(mapStateToProps,{getProfile, getSkills, getSubmittedSkills, addSubmittedSkills, removeSubmittedSkills})(profile);