const fs = require('fs')

const fileReader = async (path) => {
  let data = ''
  const rStream = fs.createReadStream(path)

  for await (const chunk of rStream) {
    data += chunk.toString()
  }
  return data.split('\n')
}

const inputValidation = (input) => {
  const arg = input.split(' ')

  if (arg[0] === 'del' && arg.length > 2) {
    return false
  }
  if (arg[0] === 'view' && arg.length > 1) {
    return false
  }
  if (arg[0] === 'comp' && arg.length > 2) {
    return false
  }
  if (arg[0] === 'add' && arg.length <= 1) {
    return false
  }
  if (arg[0] === 'help' && arg.lenth > 1) {
    return false
  }
  if (arg[0] === 'exit' && arg.length > 1) {
    return false
  }
  return true
}

module.exports = { inputValidation, fileReader }
