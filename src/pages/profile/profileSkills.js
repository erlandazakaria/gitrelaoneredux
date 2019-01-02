import React, {Component, Fragment} from "react";
import {MDBBtn} from "mdbreact";
import {connect} from 'react-redux';
import {getSkills} from '../../actions/skillsAction';
import {getSubmittedSkills, addSubmittedSkills} from '../../actions/skillsSubmittedAction';

class profileSkills extends Component{
    constructor(props){
        super(props);
        this.state = {
            SkillWillBeAdded: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        
            this.setState({
                SkillWillBeAdded: e.target.value
            }); 
    }
    handleClick(){
        let statenya = this.state.SkillWillBeAdded;
        let findDuplicate= this.props.skillsSubmitted.idSkills.find(function(element) {
            return element === statenya; });
        if(statenya === ""){
            alert("Please Pick a Skill First!");
        }
        else if(findDuplicate === null || findDuplicate === undefined){
            this.props.addSubmittedSkills(this.state.SkillWillBeAdded);
        }
        else{
            alert("This Skill already added");
        }
    }
    render(){
        const {skills} = this.props;
        return(
            <Fragment>
            <div className="col-md-6 selectForm">
                <select className="browser-default custom-select" onChange={this.handleChange}>
                        <option value="">Select Your Skills</option>
                        { Object.keys(skills).map((item, i) => (
                            <option key={i} value={skills[item].id} name={skills[item].skill_name}>
                                {skills[item].skill_name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="col-md-6 buttonSelectForm">
                <MDBBtn size="sm" styles={{"margin":"0px"}} color="primary" onClick={this.handleClick}> Add Skills</MDBBtn>
            </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        skills: state.skills,
        skillsSubmitted: state.skillsSubmitted
    }
    
}

export default connect(mapStateToProps,{getSkills, getSubmittedSkills, addSubmittedSkills})(profileSkills);