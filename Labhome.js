import React,{Component} from "react";
import './Labhome.css';

class Drhome extends Component{
    render(){
        return(
                <div className="lh">
                
                <nav class="navigation3">
                <ul className="mainmenu3">
                <li><a href="ledit">EDIT PROFILE</a></li>
                <li><a href="lpass">PASSWORD CHANGE</a></li>
                <li><a href="lnoti">NOTIFICATIONS</a></li>
                <li><a href="lsendmsg">SEND MESSAGES</a></li>
                </ul>
                </nav>
                
                </div>
            
        );
    }
    

}
export default Drhome;