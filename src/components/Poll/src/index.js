import React from "react";
import { render } from "react-dom";
import Graph from "./Graph";

let choices = [
    {
      id: 1,
      title: 'De Neve',
      votes: 10,
    },
    {
      id: 2,
      title: 'Covel',
      votes: 90,
    },
    {
      id: 3,
      title: 'Feast',
      votes: 30,
    },
    {
      id: 4,
      title: 'Bruin Plate',
      votes: 40,
    },
];

class App extends React.Component {
  handleChoiceUpVote = (choiceId) => {
    let nextChoices = choices.map((choice) => {
      if (choice.id === choiceId) {
        return Object.assign({}, choice, {
          votes: choice.votes + 1,
        });
      } else {
        return choice;
      }
    });
    choices = nextChoices;
    render(<Results />, document.getElementById("content"));
    console.log(choices);
  }

  render() {
    const choiceComponents = choices.map((choice) => (
      <Choice
        key={'choice-' + choice.id}
        id={choice.id}
        title={choice.title}
        votes={choice.votes}
        onVote={this.handleChoiceUpVote}
      />
    ));

    return (
      <div>
        {choiceComponents}
      </div>
    );
  }
}

class Choice extends React.Component {
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );

  render() {
    return (
      <div>
          <a onClick={this.handleUpVote}>
            <i className='fas fa-check-circle' />
          </a>
          <p>
            {this.props.title}
          </p>
      </div>
    );
  }
}

class Results extends React.Component {
  render() {
    return (
      <div>
        <Graph width="400" height="120" data={choices} />
        <p>
          {choices.votes}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("content"));
