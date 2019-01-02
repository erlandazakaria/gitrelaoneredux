import React, {Component, Fragment} from "react";
import noimg from "../../images/noimg.png";
import {connect} from 'react-redux';
import {getProfile, editProfile} from '../../actions/profileAction';

class profilePhoto extends Component{
    constructor(props){
        super(props);
        this.handleSelectedFile = this.handleSelectedFile.bind(this);
    }
    handleSelectedFile(event) {
        document.getElementById('selectFile').innerHTML = event.target.value;
        this.props.editProfile("pic", event.target.value);
    }
    render(){
        const {profile} = this.props;
        return(
            <Fragment>
            <div className="col-md-4">
                <img 
                    alt="Your Profile" 
                    className="photo-thumb img-responsive" 
                    src={ profile.pic===null ? noimg : profile.pic}
                    />
            </div>
            <div className="photo-ps col-md-8   ">
                <p>
                Max File Size: 1Mb<br />  
                Allowed File: Jpg, Jpeg, and PNG<br />
                </p>
                
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                        </span>
                    </div>
                    <div className="custom-file">
                        <input
                        type="file"
                        className="custom-file-input cloudinary-fileupload"
                        data-cloudinary-field="image_id"
                        
                        aria-describedby="inputGroupFileAddon01"
                        onChange={ this.handleSelectedFile }
                        />
                        <label className="custom-file-label" id="selectFile" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                    </div>
            </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        profile: state.profile
    }
    
}
export default connect(mapStateToProps, {getProfile, editProfile})(profilePhoto);