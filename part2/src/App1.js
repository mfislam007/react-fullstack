import {useState} from 'react'

const App1 = () =>{
    const [persons, setPersons] = useState([
        {
            name:'Arto Hellas',
            number:'545-54722422',
            id:1
        },
        {
            name : 'Ada Lovelace',
            number: '425-658742685',
            id:2
        },
        {
            name:'Dan Abramov',
            number:'45452-28546454',
            id:3
        },
        {
            name:'Mary Poppendieck',
            number:'965-56-54125',
            id:4
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event)=>{
        event.preventDefault()
        
    }

    const handleNameChange =(event)=>{
       setNewName(event.target.value)
    }

    const handleNumberChange =(event)=>{
        setNewNumber(event.target.value)
     }

    const alert = () =>{
        if ({newName} === {setNewName}){
            alert (`${newName} is already added to phonebook`)}
    }
   /*if ({newName} === {setNewName}){
        alert (`${newName} is already added to phonebook`)}*/
      
    
    return(
        <div>
        <div>
          <h2>Phonebook</h2>  
          <form>
            <div>
                filter shown with
                <input/>
            </div>
          </form>
        </div>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
            <div>
                name: 
                <input value = {newName}
                        onChange= {handleNameChange}  
                />
            </div>     
            <div>
                number: 
                <input value = {newNumber}
                        onChange= {handleNumberChange}  
                />
            </div>              
            <div>
                <button type= "submit"
                >add
                </button>
                
            </div>
            <div></div>
        </form>
        <h2>Numbers</h2>
       <div>
        {persons.map(person =>
            <div key = {person.id}>{person.name} {person.number}</div>)
        }
       </div>
        </div>
    )
}

export default App1