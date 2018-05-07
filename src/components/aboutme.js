import React, {Component} from 'react';
import {  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class About extends Component{
  render(){
    return(
      <div className="aboutme-grid">

        <Card shadow={5} style={{minWidth: '350', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          </CardText>
          <CardActions border>
            <Button colored>LinkedIn</Button>
            <Button colored>GitHub</Button>

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      </div>
    )
  }
}

export default About;
