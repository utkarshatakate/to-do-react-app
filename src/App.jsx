import * as React from 'react';
import { useState } from 'react';
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Chip from '@mui/material/Chip';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};


function App() {
  const [todos, settodos] = useState([{title:"learn react js",id:1}]);
  function addTodo(){
    settodos([...todos,{title:document.getElementById("standard-basic").value,id:todos.length+1}]);
    title:document.getElementById("standard-basic").value="";
  }

 /*onclick={()=>addTodo}*/
 function deleteData(id) {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  settodos(updatedTodos); // Update the state with the filtered array
}
 

  
  const card = (
    <React.Fragment>
      <CardContent>
      <TextField id="standard-basic" label="Add Item" variant="standard"  />
      <Fab color="primary" aria-label="add" onClick={addTodo}>
        <AddIcon />
      </Fab>

      <div className="todos-container ">
        {todos.map((todo) => {
          return (
              <>
               <Stack spacing={2} sx={{ maxWidth: 600 }}>
               <SnackbarContent message={todo.title} />
               </Stack>
               <Chip
                  label=""
                  deleteIcon={<DeleteIcon />}
                  variant="outlined"
                  value={todo.id}
                  onDelete={() => deleteData(todo.id)}
                />
             <br></br></>
          );
        })}
      </div>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </React.Fragment>
  );

  return (
    <>
      <h1 className='top'>
        To-Do Application
       </h1>
     
        <Card variant="outlined">{card}</Card>
        
    </>
  )
}

export default App
