import React, { Component } from 'react';
// import WordsList from './WordsList';
// import Highlightable, {ranges, onTextHighlightedCallback, uniqueId, onMouseOverHighlightedWordCallback} from 'highlightable';

//import './ReadingLevel.css';
// import styled from 'styled-components';

class ReadingLevel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  // handleDoubleClick = (evt) => {
  //   console.log('EVT', evt.target);
  //   // this.setState({
  //   //   words: [...this.state.words, evt.target]
  //   // });
  // }

  onMouseOverHighlightedWordCallback = (range) => {
    alert(range);
  }

  onTextHighlightedCallback = (range) => {
    alert(range);
  }

  render() {
    /* <Highlightable ranges={ranges}
    enabled={true}
    onTextHighlighted={onTextHighlightedCallback}
    id={uniqueId}
    onMouseOverHighlightedWord={onMouseOverHighlightedWordCallback}
    highlightStyle={{
      backgroundColor: '#ffcc80'
    }}
    text={this.props.text}
    />
    */
   
    return <div className='ReadingLevel'>
      <div className='container'>
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.readability}</h2>
        </div>
        <div>
          {this.props.text.split('\n').map(t => <p>{t}</p>)}
          {/* {this.state.words.length ?
            <WordsList words={this.state.words} /> : ''
          } */}
        </div>
      </div> 
    </div>;
  }

  state = {};
}

ReadingLevel.propTypes = {};

ReadingLevel.defaultProps = {};

export default ReadingLevel;