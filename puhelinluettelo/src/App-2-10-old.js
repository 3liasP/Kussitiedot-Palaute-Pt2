import React from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [
				{ name: 'Arto Hellas', id:0, number:"040-123456"}
			],
			newName: '',
			newNumber: ''
		}
	}

	// Tapahtumankäsittelijät nimelle...
	nameChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newName: event.target.value })
	}
	// ... ja numerolle.
	numChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newNumber: event.target.value })
	}


	addPerson = (event) => {
		event.preventDefault()
		// Esttetään duplikaattien lisääminen
		if (this.state.persons.map(person => person.name).includes(this.state.newName)){
			alert(`${this.state.newName} is already added to phonebook!`)
		} else if (this.state.newName === '' || this.state.newNumber === '') {
			alert(`Give name AND number!`)
		} else {
			// Toteutetaan inputista saadun nimen (newName) lisääminen kontaktilistaan (persons)
			let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1])
			addPerson.name = this.state.newName
			addPerson.id++
			addPerson.number = this.state.newNumber
			console.log("adding Person:",addPerson.name,"with number:",addPerson.number)
			const modifiedPersons = this.state.persons.concat(addPerson)

			this.setState({
				persons: modifiedPersons,
				newName: '',
				newNumber: ''
			})
		}
	}

	// Renderöinti
	render() {
		return (
			<div>
				<h2>Phonebook</h2>

				<h3>Add a new:</h3>

				<PersonForm
					addPerson={this.addPerson}
					nameChangeCtrl={this.nameChangeCtrl}
					numChangeCtrl={this.numChangeCtrl}
				/>
				<h2>Numbers</h2>
				<Persons persons = {this.state.persons} />
			</div>
		)
	}
}

export default App
