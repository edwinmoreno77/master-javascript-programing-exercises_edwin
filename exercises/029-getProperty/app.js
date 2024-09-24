function getProperty(obj, key) {
  // your code here
  return obj[key];

}

const person = {
  name: 'Pedro',
  age: 35,
  country: 'Chile'
}

getProperty(person, 'name')
