import './App.css';
class Parent {
  constructor(firstName, lastName, country, title) {
    // we bind the params with this class object using this keyword
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
  }
  parentMethod() {
    // code goes here
  }
}
class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // we bind the child params with the this keyword to this child object
  }
  getSkills() {
    let len = this.skills.length
    return len > 0 ? this.skills.join(', ') : 'No skills found'
  }
  childMethod() {
    // code goes here
  }
}
const c1 = new Child(
  'Rainnand', 
  'Montaniel', 
  'Philippines', 
  'React developer', 
  ["React", "JavaFX","Flask"]
)
console.log(c1.getPersonInfo(),"experienced in ", c1.getSkills())

const C1Info = ()=>(<h2 className='info'>{c1.getPersonInfo()}</h2>)
const C1Skills = ()=>(<h3 className='skills'>{c1.getSkills()}</h3>)

function App() {
  return (
    <div className="App">
      <h1>
        Hello, World
      </h1>
      <div className="main-content">
        <C1Info />
        <C1Skills />
        <form className='forms'action="">
          <div className='input-section'>
            <input type='text' className='input_field'></input>
            <input type='text' className='input_field'></input>
            <input type='text' className='input_field'></input>
          </div>
          <button type='button' className='btn-1'>Enter the details </button>
        </form>

      </div>
    </div>
  );
}

export default App;
