import React, { Component } from 'react';
import './Tools.css';
import Tool from './Tool.js';



export default class Tools extends Component {
  constructor() {
    super();
    this.state = {
      active: -1
    };
  }
  
  isOn = (i) => {
    return this.state.active === i;    
  }

  turnOn = (i) => {
    (this.state.active === i) ? this.setState({active: -1}) :
    this.setState({active: i});

  };
  
    render() {
      return (
        <div className='tools'>
          <Tool
            title="BgColors" propertyName='backgroundColor' enabled={this.isOn(0)} f={() => { this.turnOn(0)}} name="Background Color" icon="eye-dropper" bgcolors={['skyblue', 'lightseagreen','lemonchiffon', 'violet', 'lightpink']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
          title="Fonts"  propertyName='fontFamily' name="Font Style" enabled={this.isOn(1)} f={() => { this.turnOn(1)}} icon="text-width" 
          names={['Impact', 'Helvetica', 'Dancing Script']}
          fonts={['Impact, Charcoal, sans-serif', 'Arial, Helvetica, sans-serif', '"Dancing Script", cursive']} changeProperty={(key, value) => 
            this.props.changeProperty(key, value)}
        />
        {/* Pdf doesn't accept "px" units */}
          <Tool
            title="Frames" propertyName='border' name='Frames' icon="border-style" frames={['5pt solid blue', '5pt double yellow ', '5pt outset purple']} 
            enabled={this.isOn(2)} f={() => { this.turnOn(2)}} 
            changeProperty={(key, value) => this.props.changeProperty(key, value)}
            names={["solid blue", "double yellow", "outset purple"]}
          />
          <Tool
            title="Colors" propertyName="color" name="Text Color"  icon="paint-brush" enabled={this.isOn(3)} f={() => { this.turnOn(3)}} 
            colors={['skyblue', 'lightseagreen','sandybrown', 'violet', 'lightpink']} 
            changeProperty={(key, value) => this.props.changeProperty(key, value)}
          />
          <Tool
            title="BgImages"  propertyName='backgroundImage'  name="Background Image" icon="file-image" bgImages={['https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg', 
            'https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg',
            'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}  enabled={this.isOn(4)} f={() => { this.turnOn(4)}} 
              names={["patchy", "hatching", "colored"]}
          />
      </div>
      );
    }
}