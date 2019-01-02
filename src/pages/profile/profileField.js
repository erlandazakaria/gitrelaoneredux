import React, {Component, Fragment} from "react";
import { MDBInput } from "mdbreact";
import {connect} from 'react-redux';
import {getProfile, editProfile} from '../../actions/profileAction';

class profileField extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.editProfile(e.target.name, e.target.value);
    }
    render(){
        return(
            <Fragment>
                
            <div className="row">
                <div className="col-md-6">
                    <MDBInput disabled type="text" label="NIK" value={this.props.profile.identity_number} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">        
                    <MDBInput type="text" name="first_name" label="First Name" value={this.props.profile.first_name} onChange={this.handleChange} />
                </div>
                <div className="col-md-6">
                    <MDBInput type="text" name="last_name" label="Last Name" value={this.props.profile.last_name} onChange={this.handleChange} />
                </div>
            </div>
        </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps){
    
    return{
        profile: state.profile,
    }
    
}

export default connect(mapStateToProps, {editProfile, getProfile})(profileField);