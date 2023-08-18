const readline = require('readline')
const fs = require('fs')
const { fileReader, inputValidation } = require('./utils.js')

const tempTodoList = []

if (!fs.existsSync('./todo.txt')) {
  fs.writeFileSync('./todo.txt', '## All the best!')
}

const rl = readline.createInterface({
  input: process.stdin,
})

;async () => {
  const data = await fileReader('./todo.txt')
  tempTodoList.push(...data)
}

const responseHandler = (input) => {
  const arg = input.trim().split(' ')
  switch (arg[0]) {
    case 'add':
      tempTodoList.push(
        arg.slice(1).join(' ') + ` - Added on ${new Date().toDateString()}`
      )
      process.stdout.write(
        `Todo Added, Current count - ${tempTodoList.length}\n`
      )
      break
    case 'view':
      if (tempTodoList.length === 0) {
        process.stdout.write(`Todo-List seems empty\n`)
      } else {
        process.stdout.write('Available Todo Lists\n')
        tempTodoList.forEach((todo, index) => {
          process.stdout.write(`${index + 1}. ${todo}\n`)
        })
      }
      break
    case 'del':
      tempTodoList.splice(arg[1] - 1, 1)
      process.stdout.write(
        `Todo Deleted at index - ${arg[1]}, current count - ${tempTodoList.length}\n`
      )
      break
    case 'comp':
      tempTodoList[arg[1] - 1] += ' - Completed'
      process.stdout.write(
        `Todo updated at index - ${arg[1]}, current count - ${tempTodoList.length}\n`
      )
      break
    case 'help':
      const list = [
        'Use "add" <text> to add todos.',
        'Use "view" to view all todos.',
        'Use "del" <index> to delete todo at that index.',
        'Use "comp" <index> to strike todo.',
        'Use "exit" to save todos and exit.',
      ]
      list.forEach((item) => {
        process.stdout.write(`- ${item}\n`)
      })
      break
    case 'exit':
      fs.createWriteStream('./todo.txt').write(
        tempTodoList.join('\n'),
        (err) => {
          if (err) {
            process.stdout.write(err.message)
            process.exit(1)
          }
          process.exit(0)
        }
      )
      break
    case 'clear':
      console.clear()
      break
    default:
      process.stdout.write(
        'Invalid command, Type help to view available commands!\n'
      )
      break
  }
}

process.stdout.write(
  '>: Welcome to a Basic Todo Application using built on CLI. Type help to view commands.\n-: '
)

rl.on('line', (input) => {
  if (!inputValidation(input)) {
    process.stdout.write('Invalid arguments passed!\n')
  } else {
    responseHandler(input)
  }
  process.stdout.write('-: ')
})
