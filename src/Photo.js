import React from 'react';
import './App.css';
import Img from './achref.png';
import {ProgressBar} from 'react-bootstrap';


function Photo() {
  return (
    <div className='photo'>
      <br></br>
     
    <div className='name t'> Achref Merai </div>
    <div>
    <img className=' h' src={Img}/>
<div className='name p'><h5>Presonel Info</h5></div>
<div className='name'><h6>Adress</h6></div>
<div className='name'><h6>Tunis lac 1</h6></div>
<div className='name'><h6>Phone</h6></div>
<div className='name'><h6>+216 90135844</h6></div>
<div className='name'><h6>Email</h6></div>
<div className='name'><h6>merai.achref@gmail.com</h6></div>
<div className='name'><h6>Date of birth</h6></div>
<div className='name'><h6>10/06/1996</h6></div>
<div className='name p'> <h5>Skills</h5></div>
<div className='name'><h6>C/C++</h6></div>
<div ><ProgressBar now={60} /></div>
<div className='name'><h6>html5</h6></div>
<div ><ProgressBar now={80} /></div>
<div className='name'><h6>Java</h6></div>
<div ><ProgressBar now={30} /></div>
<div className='name'><h6>css3</h6></div>
<div ><ProgressBar now={80} /></div>
<div className='name'><h6>Javascript</h6></div>
<div ><ProgressBar now={50} /></div>
<div className='name'><h6>React Js</h6></div>
<div ><ProgressBar now={20} /></div>

<br></br>
<br></br>
    </div>
    </div>
  );
}

export default Photo;