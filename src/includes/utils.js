// Omit
/*
Object.entries(obj)
.filter(([key]) => !['blacklisted', 'keys'].includes(key))
.reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
*/

// Omit 2
/*
const person = {
  name: 'John',
  password: '123',
  age: 28
}

const newPerson = Object.keys(person).reduce((obj, key) => {
  if (key !== property) {
    return { ...obj, [key]: person[key] }
  }
  return obj
}, {})
*/
const omit = (_object, property) => {
    Object.keys(_object).reduce((obj, key) => {
        if (key !== property) {
            return { ..._object, [key]: person[key] }
        }
        return obj
    }, {})
}

// Pick
/*
Object.entries(obj)
.filter(([key]) => ['whitelisted', 'keys'].includes(key))
.reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
*/