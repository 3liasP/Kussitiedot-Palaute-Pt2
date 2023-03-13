import { useState, useEffect } from 'react';
import personService from './services/persons'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

// App-2-13.js
// Pääkomponentti
const App = () => {
	// Taulukko henkilöille ja näiden tiedoille
	const [persons, setPersons] = useState([])

	// Effect hook datan hankkimiseen palvelimelta
	useEffect(() => {
		console.log('effect')
		personService
			.getAll()
				.then(response => {
				setPersons(response)
				console.log('promise fullfilled')
			})
	}, [])

	// Muuttujat nimen ja numeron lisäämiselle
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	// Tarkastetaan, onko lisättävä henkilö jo luettelossa
	// Jos henkilö on uusi, lisätään se taulukkon
	const addPerson = (event) => {
		event.preventDefault()
		// Esttetään duplikaattien lisääminen
		if (persons.some(person => person.name === newName)){
			alert(`${newName} is already added to phonebook!`)
		} else if (newName === '' || newNumber === '') {
			alert(`Give name AND number!`)
		} else {
			const personObject = {
				name: newName,
				number: newNumber,
			}
			personService
				.create(personObject)
				.then(response => {
					setPersons(persons.concat(personObject))
					setNewName('')
					setNewNumber('')
				})
		}
	}
	// NewName syöttöboksiin annetuksi nimeksi
	const handleAddName = (event) => {
	setNewName(event.target.value)
	}

	// NewNumber syöttöboksiin annetuksi nimeksi
	const handleAddNumber = (event) => {
	setNewNumber(event.target.value)
	}

	return (
		<div>
		  <h2>Phonebook</h2>
	
		  <h3>Add a new</h3>
	
		  <PersonForm
			addPerson={addPerson} newName={newName} handleAddName={handleAddName}
			newNumber={newNumber} handleAddNumber={handleAddNumber}
		  />
		  
		  <h3>Numbers</h3>
	
		  <Persons persons={persons}/>
		</div>
	  )
}

export default App