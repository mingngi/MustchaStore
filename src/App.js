import React, { } from 'react';
import './App.css';
//import fontawesome from '@fortawesome/fontawesome';
import 'semantic-ui-css/semantic.min.css';
import { } from 'semantic-ui-react';

//import Head from 'lodash'
import { Layout, Menu, Carousel, Row, Col} from 'antd';
const { Header, Content, Footer } = Layout;

export default () => (
  <Layout className="layout" >
  <div id="container">
  <div id="Header">
    <Header style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }} >
        <Menu.Item key="1">
          <a href="#Home" className="active">HOME</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#Tea" >TEA</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#Product">PRODUCT</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#Contact">CONTACT</a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="#Cart"><i class="shopping cart icon"></i></a>
        </Menu.Item>
      </Menu>
    </Header>
  </div>

    <Content style={{  background: '#fff' , padding: '0 50px'}}>
      <div style={{ background: 'transparent', padding: '25', minHeight: '280' , margin: '80px'}} >

      <div id="Home">
        <Row style={{ textAlign:'center', padding: 60}} >
          <Carousel autoplay >
              <div>
                <Row  style={{ textAlign:'center', padding: 50}} >
                  <Col span={12} >
                    <img src="https://www.palaisdesthes.com/pub/media/wysiwyg/thes/matcha/matcha-tea.png" alt="MustchaHomeP1" width="512" height="457" padding="20px"/>
                  </Col>
                  <Col span={12} style={{ textAlign:'center', padding:30}} >
                  <img src="https://i.imgur.com/QqFZgsO.png" alt="Text" border="0" width="384" height="172" VSPACE="130" padding="20px"/>
                  </Col>
                </Row>
            </div>
            <div>
              <Row  style={{ textAlign:'center', padding: 50}} >
                <Col span={12} style={{ textAlign:'left', padding: 10}} >
                <img src="https://i.imgur.com/zTov8sD.jpg" alt="MustchaHomeP1" width="500" height="423" padding="30px"/>
                </Col>
                <Col span={12} style={{ textAlign:'top', padding:60}} >
                <img src="https://i.imgur.com/MRuLmy4.png" alt="Text" border="0" width="270" height="176" VSPACE="90" padding="40px"/>
                </Col>
                <Col span={12}>
                </Col>
              </Row>
            </div>
            <div>
              <Row  style={{ textAlign:'center', padding: 50}} >
                <Col span={12} style={{ textAlign:'left', padding: 10}} >
                <img src="https://i.imgur.com/wlQCpSr.jpg" alt="MustchaHomeP1" width="450" height="449" padding="30px"/>
                </Col>
                <Col span={12} style={{ textAlign:'center', padding:30}} >
                <img src="https://i.imgur.com/u4dSoBD.png" alt="Text" border="0" width="359" height="170" VSPACE="90" padding="20px"/>
                </Col>
                <Col span={12}>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Row>
      </div>

      <div id="Tea">
            <Row style={{ textAlign:'center', padding:80}}>
              <div>
                <h1 style={{ textAlign:'center', padding:10}}>TEA</h1>
              </div>
                <Col span={12}>
                  <img src="https://i.imgur.com/Zx58auC.jpg" alt="MustchaTea" width="300" height="267" padding="20px"/>
                </Col>
                <Col span={12}>
                  <div>
                    <h3 style={{ textAlign:'left', padding:60}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green tea is a type of tea that is made from Camellia sinensis leaves that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to many other countries in Asia.
                    </h3>
                  </div>
                </Col>
            </Row>

            <h1 style={{ textAlign:'center', padding:10}}>TYPE OF TEA</h1>
              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4} >
                  <img src="https://i.imgur.com/wyQQ9ds.jpg" alt="MustchaType01" width="150" height="150" padding="50px"/>
                    <h3>Genmaicha (玄米茶)</h3>
                </Col>
                <Col span={4}>
                  <img src="https://i.imgur.com/P8H2mBY.jpg" alt="MustchaType02" width="150" height="150" padding="50px"/>
                  <h3>Hojicha (ほうじ茶)</h3>
                </Col>
                <Col span={4}>
                  <img src="https://i.imgur.com/roxYXXM.jpg" alt="MustchaType03" width="150" height="150" padding="50px"/>
                  <h3>Gyokuro (玉露)</h3>
                </Col>
                <Col span={4}>
                  <img src="https://i.imgur.com/UPfZVCL.jpg" alt="MustchaType04" width="150" height="150" padding="50px"/>
                  <h3>Konacha (粉茶)</h3>
                </Col>
              </Row>

              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4}>
                  <img src="https://i.imgur.com/cM9CQDU.jpg" alt="MustchaType05" width="150" height="150" padding="50px"/>
                  <h3>Bancha (番茶)</h3>
                </Col>
                <Col span={4}>
                  <img src="https://i.imgur.com/Y4xCc4o.jpg" alt="MustchaType05" width="150" height="150" padding="50px"/>
                  <h3>Sencha (煎茶)</h3>
                </Col>
                <Col span={4}>
                  <img src="https://i.imgur.com/LiDu7BM.jpg" alt="MustchaType07" width="150" height="150" padding="50px"/>
                  <h3>Matcha (抹茶)</h3>
                </Col>
                <Col span={4} >
                  <img src="https://i.imgur.com/JkYOoOH.jpg" alt="MustchaType08" width="150" height="150" padding="50px" />
                  <h3>Funmatsucha (粉末茶)</h3>
                </Col>
              </Row>
          </div>

          <div id="Product">
          <Row style={{ textAlign:'center', padding:80}}>
            <div>
              <h1 style={{ textAlign:'center', padding:10}}>PRODUCT</h1>
            </div>
            <div class="ui grid" style={{ textAlign:'center', margin:20}}>
              <div class="four wide column">
                <div class="ui fluid card link">
                  <div class="image">
                    <img src="https://i.imgur.com/kNuuNMe.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
                  </div>
                <div class="content">
                  <p>MESH TEA BALL DIAMETER </p>
                  <div class="ui two buttons">
                  <button class="ui inverted green button">ADD TO CART</button>
                  </div>
                </div>
                </div>
            </div>
            <div class="four wide column">
              <div class="ui fluid card link">
                <div class="image">
                  <img src="https://i.imgur.com/T3qmS5W.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
                </div>
              <div class="content">
                <p>LA CAVALIÈRE 2 TEACUPS</p>
                <div class="ui two buttons">
                <button class="ui inverted green button">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>

          <div class="four wide column">
            <div class="ui fluid card link">
              <div class="image">
                <img src="https://i.imgur.com/e7PbKIq.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
              </div>
            <div class="content">
              <p>CEREMONIAL BOWL</p>
              <div class="ui two buttons">
              <button class="ui inverted green button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/DeOvEXK.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>MATCHA TEA WHISK</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/k38yDVo.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>IWA CUP</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/pIcUAK5.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>HAIIRO CUP</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/fPeArp6.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>BLACK CAST IRON TEAPOT</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/rgHE2SA.jpg" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>TEACUP ILLUSIONS</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/6PHR7hi.png" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>ORGANIC COCOA MATCHA</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/0uerRis.png" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>MATCHA IMPÉRIAL</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/MALqUlq.png" alt="MustchaType08" width="150" height="150" padding="50px"/>
            </div>
           <div class="content">
            <p>MATCHA SENCHA</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

        <div class="four wide column">
          <div class="ui fluid card link">
            <div class="image">
              <img src="https://i.imgur.com/hDNAAh6.png" alt="MustchaType08" width="150" height="150" padding="50px" data-content="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide." data-variation="wide"/>
            </div>
           <div class="content">
            <p>MATCHA GENMAICHA</p>
            <div class="ui two buttons">
            <button class="ui inverted green button">ADD TO CART</button>
            </div>
           </div>
          </div>
        </div>

      </div>
          </Row>
          </div>
      </div>
    </Content>

<div id="Contact">
    <Footer style={{ textAlign: 'center',width: '100%'  }}>
      <Row style={{ textAlign:'center', padding:20}}>
        <Col span={12}>
          <img src="https://i.imgur.com/8eFHOen.png" alt="MustchaLogo" width="150" height="150" padding="10px"/>
          <h3 style={{ color: '#fff', padding:0}}>Mustcha</h3>
        </Col>
        <Col span={12} style={{ textAlign:'left', padding:0}}>
          <h2 style={{ color: '#fff', padding:0}}>Contact</h2>
          <dl className="alt" >
          <dt>Address</dt>
          <dd>126 Prachauthit Road, Bang Mod, Thung Khru, Bangkok</dd>
          <dt>Phone</dt>
          <dd>(+66) 808080880</dd>
          <dt>Email</dt>
          <dd>info@mustcha.com</dd>
        </dl>
        <div className="icons">
                  <h3 style={{ color: '#fff', padding:0}}>
                  <i class="twitter icon"></i>&nbsp; &nbsp;
                  <i class="facebook icon"></i>&nbsp; &nbsp;
                  <i class="instagram icon"></i>
                  </h3>
        </div>
        </Col>
      </Row>
      Copyright © 2018 Mustcha. All rights reserved.
    </Footer>
  </div>
  </div>
    <style jsx global>{`
      .ant-menu-item-selected > a, .ant-menu-item-selected > a:hover{
        color: rgba(25, 40, 0, 0.86);
      }
      .ant-menu-horizontal > .ant-menu-item-selected > a{
        color: rgba(25, 40, 0, 0.86);
      }
      .ui.button, .ui.buttons .button, .ui.buttons .or{
        font-size: 0.95rem;
        font-weight: 600;
      }
      .ui.inverted.green.button:active, .ui.inverted.green.buttons .button:active{
        background-color: rgba(25, 40, 0, 0.86);
      }
      .ui.inverted.green.button:hover, .ui.inverted.green.buttons .button:hover{
        background-color: rgba(25, 40, 0, 0.86);
      }
      .ui.inverted.green.button:focus, .ui.inverted.green.buttons .button:focus{
        background-color: rgba(41, 65, 2, 0.86);
      }
      .button.ui inverted green button{
        background-color: rgba(25, 40, 0, 0.86);
      }
      .ui.inverted.green.button, .ui.inverted.green.buttons .button{
        background-color: transparent;
        -webkit-box-shadow: 0 0 0 1px rgba(25, 40, 0, 0.86) inset!important;
        box-shadow: 0 0 0 1px rgba(25, 40, 0, 0.86) inset!important;
        color: rgba(25, 40, 0, 0.86);
      }
      .ui.green.button, .ui.green.buttons .button{
        background-color: rgba(25, 40, 0, 0.86);
        color: #fff;
        text-shadow: none;
        background-image: none;
      }
      .ui.button{
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-weight: 300;
      }
      .ui.card>.image, .ui.cards>.card>.image {
        position: relative;
        display: block;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        padding: 10px;
        background: rgba(0,0,0,0);
      }

    .ant-menu-horizontal > .ant-menu-item > a:hover{
      color: #18361b;
    }
	  h1, h2, h3, h4, h5 {
		  font-family: 'Barlow Semi Condensed', sans-serif;
      font-weight: 100;
	  }
    a {
      color: rgba(25, 40, 0, 0.86);
    }
    .body{
      background-color: rgba(25, 40, 0, 0.86);
    }
    .layout{
      font-family: 'Barlow Semi Condensed', sans-serif;
      letter-spacing: 0.5px;
    }
    .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
      font-family: 'Barlow Semi Condensed', sans-serif;
      font-size: 16px;
      letter-spacing: 1px;
    }
    .ant-layout-header{
      background: #fff;
      z-index: 100;
    }
    #components-layout-demo-top .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 1);
      margin: 16px 24px 16px 0;
      float: left;
    }
    .ant-carousel .slick-slide {
      font-family: 'Barlow Semi Condensed', sans-serif;
      letter-spacing: 1px;
      text-align: center;
      height: 590px;
      line-height: 50px;
      background: #fff;
      overflow: visible;
    }
    .ant-carousel .slick-slide h3 {
      color: #fff;
    }
    .ant-carousel .slick-initialized .slick-slide{
      display: inline-block;
    }
    .carousel .h1{
      padding-left: 5px;
    }
    .ant-layout-footer{
      font-size: 14px;
      background: rgba(25, 40, 0, 0.86);
      color: #fff ;
      margin: 0px;
    }
    .footer{
      color: #000 ;
    }
    .ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
      border-bottom: 2px solid rgba(30, 48, 0, 0.73);
      color: rgba(30, 48, 0, 0.73);
    }
   `}</style>
  </Layout>
 )
