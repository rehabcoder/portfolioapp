import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
    <Layout>
        <Header className="header-color" title={<span><span style={{ color: 'black' }}>Sukhpreet Singh</span><strong></strong></span>}>
            <Navigation >
                <Link to="/resume" style={{color:'white'}}>Resume</Link>

                <Link to="/projects" style={{color:'white'}}>Projects</Link>
                <Link to="/contact" style={{color:'white'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume" style={{color:'green'}}>Resume</Link>

            <Link to="/projects" style={{color:'green'}}>Projects</Link>
            <Link to="/contact" style={{color:'green'}}>Contact</Link>
            </Navigation>
        </Drawer>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>

    </Layout>
</div>

    );
  }
}

export default App;
