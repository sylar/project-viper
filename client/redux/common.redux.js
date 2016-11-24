const Types = {
  Start: 'START',
  Finish: 'FINISH'
}

export function getActionName ({ type, task }) {
  return `${Types[type]}: ${task}`
}

export function getAction (action) {
  return {
    type: getActionName({ type: action.type, task: action.task }),
    payload: action.payload
  }
}
