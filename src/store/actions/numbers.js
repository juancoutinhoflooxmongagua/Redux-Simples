export function changeNumberMin(newNumber) {
    return {
      type: 'SET_MIN',
      payload: newNumber
    };
  }
  
  export function changeNumberMax(newNumber) {
    return {
      type: 'SET_MAX',
      payload: newNumber
    };
  }
  