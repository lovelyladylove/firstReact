import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
    persons: [
    {id:1, name: 'Red Ridinghood', age: 14 },
    {id:2, name: 'Sleeping Beauty', age: 118 },
    {id:3, name: 'Snow White', age: 16 },
    {id:4, name: 'Little Mermaid', age: 30 },
    {id:5, name: 'Cindirella', age: 18 },
    {id:6, name: 'Rapunsel', age: 15 }
    ],
		style: {
			backgroundColor: 'whitesmoke',
			border: '1px solid blue',
			padding: '10px',
			boxShadow: '0 3px 3px #00008B'
		},
		showPersons: false
	};

	nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const humanbeing = {
      ...this.state.persons[personIndex]
    };

    humanbeing.name = event.target.value;

    const people = [...this.state.persons];
    people[personIndex]=humanbeing;

    this.setState({persons: people});

	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			style: {
				backgroundColor: 'whitesmoke',
				border: '1px solid #900C3F',
				padding: '10px',
				boxShadow: '0 3px 3px #900C3F'
			},
			showPersons: !doesShow
		});
	};

/*	deletePersonHandler = (nam, old, index) => {
		alert('oh no ' + nam +', you are ' + old +' already! By the way, you are in index ' + index);
  };
*/

	deletePersonHandler = (personIndex) => {
    const humans = this.state.persons;
    humans.splice(personIndex, 1);
    this.setState({persons:humans});
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index ) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={()=>this.deletePersonHandler(index)} 
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            />;
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hello World</h1>
				<p>I am a React Developer</p>
				<p>
					<button style={this.state.style} onClick={this.togglePersonsHandler}>
						Toggle Persons
					</button>
				</p>
				{persons}
			</div>
		);
	}
}

export default App;
