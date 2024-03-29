import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import adminImg from './images/admin_logo.png'


const adminPic = (
  <div className='image-wrapper'>
    <img src={adminImg} alt='myadmin img'/>
  </div>
)
const name = 'Rainnand'
const age = 21
const countries = ["jp", "us", "ph", "hhg"]
const obj = {
  item1: 3.14,
  item2: 'pipipi'
}
const list_count = countries.map((c) =><li key={c}>{c}</li>)
const mappedcountries = countries.map(function (country) {
  return country.toUpperCase()
})
const elem = <h1>Hello {name} age {age + 1} object: {obj.item1} {obj.item2} {new Date().getFullYear()} </h1>
const header = (
  <header >
    <div className='header-wrapper'>
      <p>Header now is a paragraph tag with {name} {mappedcountries}</p>
    </div>
  </header>
)
const div = (
<div>
  <strong>
    nice
    {' '}
    <em>em for emphasis!</em>
  </strong>
  <h1>How are you</h1>
  <small>hi </small>
</div>
)
const inputField = (
  <div>
    <label htmlFor="firstname">Enter Firstname: </label>
    <input type="text" id="firstname" placeholder="first name?"/>
  </div>
)
const app = (
  <div>
    {header}
    {elem}
    {div}
    {inputField}
    <ul>
      {list_count}
    </ul>
    {adminPic}
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
