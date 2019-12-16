import React, { useState } from 'react'
import ReactDOM from "react-dom";


const PrintRows = (props) => {console.log(props)
  return ( 
    <div style={{ textAlign: 'center' }}>
      <lu>{props.name} : {props.phone}</lu>
    </div>)
}
const Print = (props) => {
  return (props.persons.map(person => <PrintRows key={person.phone} name={person.name} phone={person.phone} />))

}
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'chedvi erblich',
      phone: '0527108708'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState()

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { name: newName, phone: newPhone }
    setPersons(persons.concat(personObject))
  }

  const handlePerson = (event) => {
    setNewName(event.target.value)
  }
  const handlePhone = (event) => {
    setNewPhone(event.target.value)
  }
  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  let namesToShow=persons.filter(person=>person.name.startsWith(newSearch))

  return (
    <div style={{ margin: '5%', color: 'black', padding: 200, background: 'lightgray', fontSize: 20, font: 'sans-serif', backgroundImage: 'ab.bmp', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <form>
        <div>
          {/* name: <input /> */}
        </div>

      </form>
      <h2>persons</h2>
      <div >
        <form onSubmit={addPerson}>
          add new name: <br /><input value={newName} onChange={handlePerson} />
          <br />
          <br />
          phone number: <br /><input value={newPhone} onChange={handlePhone} />
          <br />
          <br />
          <button type="submit" /*onClick={addPerson}*/ style={{ color: 'silver', background: 'gray', fontSize: 15 }}>add</button>
          <br />
          <br /> 
          <Print persons={persons} />
        </form>
          <form >
          <br/>
          find: <input value={newSearch} onChange={handleSearch} />
          <br />
           { /*<button type="submit" /*onClick={search} style={{ color: 'silver', background: 'gray', fontSize: 15 }}>search</button>  */}
          <br />
         {<Print persons={namesToShow}/>}
        </form>  
      </div>
     
    </div >
  )
}

// export default App
ReactDOM.render(<App />, document.getElementById("root"));