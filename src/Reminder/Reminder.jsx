import React, { useState } from 'react';
import './Reminder.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { inputAdornmentClasses } from '@mui/material';
import { Label } from '@mui/icons-material';




function Reminder() {



    const [inputData, setInputDta] = useState('');
    const [items, setItems] = useState([])

   
const additem  = () =>{
setItems([...items, inputData])
setInputDta('')
}

    return (


        <>
            <div >
                <div className='textedit'>
                    <h1 className='newtext'> Add An Event </h1>
                </div>
                <div className='inputstyle'>
                   
                    <input className="restyle"
                    value={inputData}
                    onChange={(e) => setInputDta(e.target.value)}
                     type='text'
                      placeholder='Title' /> <br />
                   
                    <input className="restyle" type='date' placeholder='enter date' /><br />
                   
                    <input className="restyle" type='Type Value' />

                    {
                        items.map((elem, index )=>{
                            return(
                                <div>
                                    <h3>{elem}</h3>
                                </div>
                            )
                        })
                    }

                </div>
                <button  onClick={additem}className='buttontext'>Add</button>        
                </div>


                <div>
                    <div></div>
                </div>
                </>
    )
}

export default Reminder;
