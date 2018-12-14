import React from 'react'
import { enquireScreen } from 'enquire-js'

import 'antd/dist/antd.css'

import Nav from './Layout/Nav'
import Banner from './Layout/Banner'
import FirstSection from './Layout/FirstSection'
import SecondSection from './Layout/SecondSection'
import ThirdSection from './Layout/ThirdSection'
import Footer from './Layout/Footer'

import { languageConfig } from '../data.source'
import '../less/antMotionStyle.less'

let isMobile
enquireScreen((b) => { isMobile = b })

const { location } = window

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port,
      isEnglish: true,
      buttonText: `Tiếng Việt`
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

  changeLanguage = () => {
    this.setState({
      isEnglish: !this.state.isEnglish,
      buttonText: this.state.buttonText === `Tiếng Việt` ? `English` : `Tiếng Việt`
    })
  }

  render() {
    const { isEnglish } = this.state
    const { English, Vietnamese } = languageConfig

    const children = [
      <Nav
        id="Nav"
        key="Nav"
        switch={this.changeLanguage.bind(this)}
        buttonText={this.state.buttonText}
        textData={isEnglish ? English : Vietnamese}
        isMobile={this.state.isMobile}
      />,
      <Banner
        id="Banner"
        key="Banner"
        textData={isEnglish ? English : Vietnamese}
        isMobile={this.state.isMobile}
      />,
      <FirstSection
        id="FirstSection"
        key="FirstSection"
        textData={isEnglish ? English : Vietnamese}
        isMobile={this.state.isMobile}
      />,
      <SecondSection
        id="SecondSection"
        key="SecondSection"
        textData={isEnglish ? English : Vietnamese}
        isMobile={this.state.isMobile}
      />,
      <ThirdSection
        id="ThirdSection"
        key="ThirdSection"
        textData={isEnglish ? English : Vietnamese}
        isMobile={this.state.isMobile}
      />,
      <Footer
        id="Footer"
        key="Footer"
        textData={isEnglish ? English : Vietnamese}
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
