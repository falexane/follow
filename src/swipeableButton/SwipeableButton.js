import React, { Component } from 'react' 
import './SwipeableButton.css'

const slider = React.createRef();
const container = React.createRef();

export default class SwipeableButton extends Component {
  
  state = {}

  getText =()=> {
    return this.state.unlocked ? (this.props.text_unlocked || 'UNLOCKED') : (this.props.text || 'SLIDE')
  }
  
  render() { 
    return (
      <div className='ReactSwipeButton'>
        <div className={'rsbContainer ' + (this.state.unlocked ? 'rsbContainerUnlocked' : '')} ref={container}>
          <div className='rsbcSlider' 
            ref={slider} 
            onMouseDown={this.startDrag} 
            style={{background: this.props.color}}
            onTouchStart={this.startDrag}>
            <span className='rsbcSliderText'>{this.getText()}</span>
            <span className='rsbcSliderArrow'></span>
            <span className='rsbcSliderCircle' style={{background: this.props.color}}></span>
          </div>
          {/* <div className='rsbcText'>{this.getText()}</div> */}
          <div className='rsbcText'>{'this is rsbcText'}</div>
        </div>
      </div>
    )
  }
}
