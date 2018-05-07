import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
          src="https://cdn.shopify.com/s/files/1/1003/5864/files/avatar-dongseok-paeng_medium.png?v=1509075310"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr/>
            <p>HTML/CSS | Bootstrap | JavaScrip | React | NodeJS | Angular</p>
            <div className="social-links">
            {/*LinkedIn*/}
              <a href="https://www.linkedin.com/in/sukhpreet-singh-171a3715a/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
              </a>
              {/*GitHub*/}
                <a href="https://github.com/rehabcoder" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>



            </div>

          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landing;
