// LEVEL 1 ARRAYS
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland']
// const first = countries[0]
// const middle = countries[(countries.length)/2]
// const last = countries[countries.length - 1]
// const list = [first, middle, last]
// console.log(list.join(' '))

// LEVEL 1 input
// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
//   }
  
//   for (const key in user) {
//     console.log(key, user[key])
//   }
  const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]

  let solveQuadratic = (a, b, c) => {
    let positiveside = ((-1)*b + Math.sqrt( ( (b*b) - ((4)*(a)*(c)) ))) / (2*a)
    let negativeside=  ((-1)*b - Math.sqrt( ( (b*b) - ((4)*(a)*(c)) ))) / (2*a)

    if (positiveside === negativeside) return `Answer: {${positiveside}}`
    return `Answer: {${positiveside} , ${negativeside}}`
  }

  console.log(solveQuadratic(1, -1, -2))

  const [x, y] = [2, (value) => value ** 2]
  console.log(x , y(x))

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

  const {firstName, lastName, age, country, job, skills, languages} = person

  let mylanguage = ""
  const myskill = skills.map((skill, i) => {
    if (i >= (skills.length-1)) return `and ${skill}.`
    return `${skill}, `
  })

  languages.forEach((lang, i) => {
    if (i >= (languages.length-1)) {mylanguage += `and ${lang}.`} 
    else{mylanguage+=`${lang}, `}
  })

  class Person {
    constructor(firstName, lastName) {
       // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      
    }
  }
  
  const person1 = new Person("haha", "huhu")
