import React, {Component} from "react"
import logo from "../images/relaone_logo.svg"

class header extends Component{
    render(){



        let styles = {
            paddingTop: "33px",
            textAlign: "left",
            paddingBottom: "33px",
            // paddingLeft: "20px",
            width: "138px"
        }

        return (
            <div className="row" style={{"backgroundColor":"#F6F8F8"}}>
                <div className="col-sm">
                    <img className="logo-relaone" style={styles} src={logo} alt="" />
                </div>
            </div>
        );
    }
}


export default header;