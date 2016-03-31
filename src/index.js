import React from 'react';
import ReactDOM from 'react-dom'

// https://egghead.io/lessons/react-building-an-accordion-component-with-react

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
    const question = this.props.details;
    return (
      <section>
        <a onClick={this.toggle}>
          <div>
            <span className="summary">{question.summary}</span>
            <span className="details">{question.answer}</span>
          </div>
        </a>
      </section>
    );
  }
}

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: require("./sample_questions")
    };
    this.renderQuestion = this.renderQuestion.bind(this);
  }
  renderQuestion(key) {
    return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
  }
  render() {
    return(
      <div>
        {Object.keys(this.state.questions).map(this.renderQuestion)}
      </div>
    )
  }
}
ReactDOM.render(
  <Accordion />,
  document.getElementById('accordion')
);


// TODO move toggle active to parent element


