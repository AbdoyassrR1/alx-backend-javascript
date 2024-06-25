export default function returnHowManyArguments(...args) {
  let argsLenght = []
  for (const arg of args) {
    argsLenght.push(arg)
  }
  return argsLenght.length
}
