import React from 'react';
import './exp.css';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import A4 from './A4';
function Experience() {
  return (
    <div>
      <div><p> Change the underlying component CSS base class name and modifier class names prefix. 
        This is an escape hatch for working with heavily customized bootstrap css. 
        Change the underlying component CSS base class name and modifier class names prefix. 
        This is an escape hatch for working with heavily customized bootstrap css.</p></div>
      <div>
        <hr></hr>
      <div className='exp' > <h3>Experience</h3></div> 
        <A1 />
        <A2 />
        <A3 />
        <A4 />
      </div>
    </div>
  );
}

export default Experience;