# Redux Notes
Predictable state container for JavaScript applications.

## Core Concepts
#### Actions<br>
>  To update state of your current application, you must dispatch an event (obviously), in Redux, these events are called Actions.
<br>
If state of a todo application looks like this:

```
{
  todos : [{
    {
      text: 'Clean some shit',
      completed: false
    },
    {
      text: 'Wash Car',
      completed: false
    }
  }]
}
```

To update state, an Action is required. It's simply an object. Example:

```
{ type: 'ADD_TODO', text: 'Pay bills' }
```

#### Reducers
>Now that Actions are defined to update current state of the application, a Reducer is needed. It's a just a function that takes two arguments. State, and the actions argument, then it returns the updated state.

```
function todos(state = [], action){
  if(action.type === 'ADD_TODO'){
    return state.push({
      text: action.text,
      completed: false
    })
  } else {
    return state;
  }
}
```

Having individual functions to update state is the idea. The you would have a main reducer for our application to call our individual reducers. Example:

```
  function application(state = {}, action){
    return {
     todos: todos(state.todos, action)
    }
  }
```
