import sample_pic from './sample_pic.jpg';

import './App.css';


class Person {
  constructor(image, name, job, skills){
    this.image = image
    this.name = name
    this.job = job
    this.skills = skills
  }
  getPersonInfo(){
    const {image, name, job, skills} = this
    return {image, name, job, skills}
  }
  get getImage(){
    return <img src={this.image} alt='me'className='image'/>
  }
  get getName(){
    return <h1 className='name'>{this.name}</h1>
  }
  get getJob(){
    return <strong className='job'>{this.job}</strong> 
  }
  get getSkills(){
    const skill_list = (this.skills).map((skill) => <li className='skill' key={skill}>{skill}</li>)
    return skill_list
  }
}
const p1 = new Person(sample_pic, "Rainnand Montaniel","React Developer",["React", "Flask", "JavaFX"])



function App() {
  return (
    <div className="App"> 
      <div className="img-frame">
        {p1.getImage}
      </div>

      <div className='details-frame'>
        {p1.getName}
        {p1.getJob}
      </div>

      <div className='skills-frame'>
        <h1>Skills</h1>
        <ul className='skill-card'>
          {p1.getSkills}
        </ul>
      </div>
    </div>
  );
}

export default App;
