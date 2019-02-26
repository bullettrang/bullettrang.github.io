import React, { Component } from 'react';
import styled from 'styled-components';
import Splash from './coverimg.JPG';
//TODO ADD PARALLAX TO BACKGROUND IMG
const HomeSplash = styled.div`
  background-image:url(${Splash});
  background-position:center;
  background-size:cover;
  width:100%;
  height:100vh;   
  display:flex;
  justify-content:center;
  align-items:center;
  h1{
    margin:0;
    text-align:center;
    text-shadow: 1px 1px 2px gray;
  }
`;

const QuickLinksWrapper=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:	#C8C8C8;
  a{
    color:black;
  }
`
export class Home extends Component {
    render(){
        return(
          <div>
            <HomeSplash>
                <h1>BRIAN TRANG</h1>
            </HomeSplash>
            <QuickLinksWrapper>
              <h1>Quick Links</h1>
              <a href="https://github.com/bullettrang"><h2><i class="fab fa-github"></i> GITHUB</h2></a>
              <a href="https://www.linkedin.com/in/btrangcal/"><h2><i class="fab fa-linkedin"></i> LinkedIn</h2></a>  
            </QuickLinksWrapper>
            </div>
        );
    }
}