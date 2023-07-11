import { v4 as uuidv4 } from "uuid";

const tasksReducer = (taskList, { type, payload}) => { 

  switch (type) {
    case 'added':
      let newTask = {
        id: uuidv4(),
        name: payload.name,
        completed: false,
      };
      return [...taskList, newTask];
    case 'changeCompleted':
      
      
        
    default:
      break;
  }

}

export default tasksReducer;