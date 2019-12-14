import React from 'react';

import './App.css';
import Photo from './Photo'
import Experience from './Experience'
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Education from './Education';
function Info() {
  return (
    <div>



      <Container>
        <Row>
          <Col sm={4}><Photo /></Col>
          <Col sm={8}> <Experience /> <Education/>
</Col>
        </Row>
      </Container>

     

    </div>

  );
}

export default Info;

