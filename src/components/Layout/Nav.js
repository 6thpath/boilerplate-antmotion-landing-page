import React from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom'
import TweenOne from 'rc-tween-one'
import { Menu, Affix, Button } from 'antd'

import logo from '../../images/logo.svg'

const Item = Menu.Item

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneOpen: false,
      menuHeight: 0
    }
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu)
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0
    })
  }

  render() {
    const { isMobile, textData } = this.props
    const { menuHeight, phoneOpen } = this.state
    const navChildren = textData.navigationItems.map(item => (
      <Item key={item.key}>
        <Link to={item.path}>
          {item.text}
        </Link>
      </Item>
    ))

    return (
      <Affix offsetTop={0}>
        <TweenOne
          component='header'
          animation={{ opacity: 0, type: 'from' }}
          className='header0 home-page-wrapper'
        >
          <div className={`home-page ${phoneOpen ? 'open' : ''}`}>
            <TweenOne
              animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
              className='header0-logo'
            >
              <img width="100%" src={logo} alt="img" />
            </TweenOne>
              {isMobile && (
                <div
                  className='header0-mobile-menu'
                  onClick={() => {this.phoneClick()}}
                >
                  <em />
                </div>
              )}
            <TweenOne
              className='header0-menu'
              animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
              ref={(c) => { this.menu = c }}
              style={isMobile ? { height: menuHeight } : null}
            >
              <Menu
                mode={isMobile ? 'inline' : 'horizontal'}
                defaultSelectedKeys={['0']}
                theme={isMobile ? 'dark' : 'default'}
              >
                {navChildren}
                <Button
                  type='primary'
                  onClick={() => {
                    this.setState(() => this.props.switch())
                  }}
                >
                  {this.props.buttonText}
                </Button>
              </Menu>
            </TweenOne>
          </div>
        </TweenOne>
      </Affix>
    )
  }
}

export default Header
