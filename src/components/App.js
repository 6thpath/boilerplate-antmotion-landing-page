/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import 'antd/dist/antd.css'

import Nav0 from './Layout/Nav0'
import Banner0 from './Layout/Banner0'
import Content0 from './Layout/Content0'
import Content5 from './Layout/Content5'
import Content3 from './Layout/Content3'
import Footer1 from './Layout/Footer1'

import {
  Nav00DataSource,
  Banner01DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Footer10DataSource
} from '../data.source'
import '../less/antMotionStyle.less'

let isMobile
enquireScreen((b) => { isMobile = b })

const { location } = window

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port
    }
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })

    if (location.port) {
      setTimeout(() => {
        this.setState({ show: true })
      }, 500)
    }
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ]

    return (
      <div
        className='templates-wrapper'
        ref={(d) => { this.dom = d }}
      >
        {this.state.show && children}
      </div>
    )
  }
}
