import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  getListArea(){
    if(this.props.focused) {
      return (
        <SearchInfo>
              <SearchInfoTitle>热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {
                  this.props.list.map((item) => {
                    return (
                      <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    )
                  })
                }
              </SearchInfoList>
            </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render(){
    return(
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={ this.props.focused }
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                className={ this.props.focused ? 'focused' : '' }
                onFocus={ this.props.handleInputFocus }
                onBlur={ this.props.handleInputBlur }
              />
            </CSSTransition>
            <i className={ this.props.focused ? 'focused iconfont' : 'iconfont' }>&#xe637;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe606;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.getFocused())
    },
    handleInputBlur(){
      dispatch(actionCreators.getBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);