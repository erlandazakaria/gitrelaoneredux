import React, {Component} from "react";
import {connect} from 'react-redux';
import {getSkills} from '../../actions/skillsAction';
import {getSubmittedSkills, removeSubmittedSkills} from '../../actions/skillsSubmittedAction';

class profileSpan extends Component{
    constructor(props){
        super(props);
        this.HapusSpan = this.HapusSpan.bind(this);
        this.getSkillName = this.getSkillName.bind(this);
    }
    HapusSpan(idHapus){
        this.props.removeSubmittedSkills(idHapus);
    }
    getSkillName(idSkillnya, listSkillnya){
        let coba = [];
                for(let i = 0; i < listSkillnya.length; i++){
                    for(let j = 0; j < idSkillnya.length; j++){
                        let intIdSkillnya = parseInt(idSkillnya[j])
                        if(listSkillnya[i].id === intIdSkillnya){
                            coba.push(<span style={{"fontSize": "15px"}}
                            className="badge badge-pill badge-primary spanSkill" 
                            key= {parseInt(idSkillnya[j])} > 
                            {listSkillnya[i].skill_name}
                            <i onClick={ () => this.HapusSpan(intIdSkillnya) } 
                            style={{"fontSize":"15px"}} 
                            className="close fa fa-times xclose"></i></span>);
                        }
                    }
                }
        return coba;
    }
    render(){
        const {skills, skillsSubmitted} = this.props;
        return(
            <div>
                {
                    skillsSubmitted.idSkills!=null ?
                    this.getSkillName(skillsSubmitted.idSkills, skills)
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        skills: state.skills,
        skillsSubmitted: state.skillsSubmitted
    }
    
}

export default connect(mapStateToProps, {getSkills, getSubmittedSkills, removeSubmittedSkills })(profileSpan)