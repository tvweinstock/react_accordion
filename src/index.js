import React from 'react';
import ReactDOM from 'react-dom'
/*var Board = require('./Board');

ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
);*/


// https://egghead.io/lessons/react-building-an-accordion-component-with-react
// http://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects
const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }
  render() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const questionComponents = this.props.questions.map(function(question, key) {
      return (
        <div key={key}>
          <span className="summary">{question.summary}</span>
          <span className="details">{question.details}</span>
        </div>
      ) 
    });

    return (
      <section>
        <a onClick={this.toggle}>
          {questionComponents}
        </a>
      </section>
    );
  }
}

const questions = [
  {summary:'question one',details:'yeahhh question oneeeee!!'},
  {summary:'question two',details:'q2 babbbbyy'}
]; 

ReactDOM.render(
  <AccordionItem questions={questions} />,
  document.getElementById('accordion')
);


// TO DO FIGURE OUT HOW TO TOGGLE THE CONTENT WITH THE TABS!!!!
// DO IT WITH CSS YES YES
/*        <p style={stateStyle}>
          {detailsComponents}
        </p>*/