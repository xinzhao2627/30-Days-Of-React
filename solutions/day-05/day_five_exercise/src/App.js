import './App.css';


const showDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return `${months[date.getMonth()]}/
          ${date.getDate()}/
          ${date.getFullYear()}. 
          Today is ${days[date.getDay()]}`
}

const Header = (props) => (
  <header>
    <div>
      <h1>{props.welcome}</h1>
      <h2>It is {showDate(new Date())} right now</h2>
      <h3>I am in {props.city}</h3>
      <small>
        {props.status 
          ? 'allowed to buy'
          :'Not allowed to Buy'}
      </small>
      <ul style={{listStyleType:'none', padding:0}}>{props.skills.map((skill) => (<li key={skill}>{skill}</li>))}</ul>
      <button onClick={props.click}>{props.text}</button>
    </div>
  </header>
)
const Body = ({run, ...rest}) => (
  <div>
    <h1>{run.lower} and {run.mid}</h1>
    <h2>{rest.wild.higher} and {rest.wild.rush}</h2>
  </div>
)

function App() {
  let money = 2020 -2
  let cost = 2019
  const skills = ['react', 'javafx', 'django'] 
  let stat = money >= cost
  return (
    <div className="App">
      <Header 
        welcome = 'Hello my name is Rainnand Hehe'
        job = 'I am a student'
        city = 'I live at Las Pinas City'
        status = {stat}
        skills = {skills}
        click = {()=>(alert(`huuhhehe ${new Date()}`))}
        text = 'halo'
        
      />
      <Body 
        run = {{lower: 2000, mid: 50}}
        wild = {{higher: 5000, rush: 70}}
      />
    </div>
  );
}

export default App;
