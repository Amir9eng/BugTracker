const reducer = (state = [], action) => {
    let update
    switch (action.type) {
      case 'ADD_BUG':
        update = state.concat({
          id: action.payload.id,
          description: action.payload.description,
          resolved: false,
        });
        break;
      case 'REMOVE_BUG':
        update = state.filter((bug) => bug.id !== action.payload.id);
        break;
      case 'RESOLVE_BUG':
        update = state.map(function (bug) {
          if (bug.id === action.payload.id) bug.resolved = true;
          return bug;
        });
        break;
      case 'UNRESOLVE_BUG':
       update = state.map(function (bug) {
          if (bug.id === action.payload.id) bug.resolved = false;
          return bug;
        });
        break;
  
      default:
       update = state;
        break;
    }
    return update
  };
  
  export default reducer;
  