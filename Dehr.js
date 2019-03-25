import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from 'url';

import './Dehr.css';
 class Dehr extends Component{
     render(){
         return(
            <div className="dehr">
            <h1>SEND EHR REQUEST</h1>
            <div className="ehr">
             <center>
        <label htmlFor="patid"><b>PATIENT ID :</b></label>
        <input type="number" id="pat" name="patid" placeholder="Patient ID.."/><br></br>
        <label htmlFor="pg"><b>ACCESSING PAGE     :</b></label>
        <input type="text" id="pg" name="apage" placeholder="Accessing page.."/><br></br>
        <Link to="/pehr"><input type="submit" value="SEND"/></Link>
        </center>
            </div>
            </div>
         );
     }
 }
 export default Dehr;