import React from 'react';
import AppNavbar from './AppNavbar';
import { Container, Row,Col } from 'reactstrap';


const Home=()=> {
  return (
    <div id='homeDiv'>
      <AppNavbar/>
      <Container  fluid>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <div style={{marginTop:"222px" , textAlign:'center',fontFamily:"cursive"}}>
              <h1> Ticketing Application</h1>              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
  export default Home