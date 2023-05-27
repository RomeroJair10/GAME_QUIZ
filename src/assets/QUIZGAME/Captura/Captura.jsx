import { useState} from "react";
import NewCaptutemButton from "./components/NewCaptuButton";
import LisCapture from "./components/LisCapture";
import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';


function App() {

    const [listCaptures, setListCaptures] = useState(
      JSON.parse (localStorage.getItem("listCaptures")) || []
      );
  
      const handleNewListCaptureButton = async() => {
        const {value} = await Swal.fire({
          title: "New Item information",
          html: `<input 
                  tipe='text' 
                  id='pregunt' 
                  name='pregunt' 
                  class='swal2-input' 
                  placeholder='pr' 
                 />
                 <input 
                 tipe='text' 
                 id='resul' 
                 name='resul' 
                 class='swal2-input' 
                 placeholder='rl' 
                />
                <input 
                  tipe='text' 
                  id='resul1' 
                  name='resul1' 
                  class='swal2-input' 
                  placeholder='rl1' 
                 />
                 <input 
                 tipe='text' 
                 id='resul2' 
                 name='resul2' 
                 class='swal2-input' 
                 placeholder='rl2' 
                />`,
    
    
          confirmButtonText: "Add Captura",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          cancelButtonText: "Dismiss",
          preConfirm: () => {
            const pregunt= Swal.getPopup().querySelector('#pregunt').value;
            const resul= Swal.getPopup().querySelector('#resul').value;
            const resul1= Swal.getPopup().querySelector('#resul1').value;
            const resul2= Swal.getPopup().querySelector('#resul2').value
            
            if (!pregunt || !resul || !resul1 || !resul2) {
              Swal.showValidationMessage('Please enter an item pregunt');
            }
            return{pregunt, resul, resul1, resul2};
          },
        })
    
        if(!value.pregunt || !value.resul || !value.resul1 || !value.resul2) return
    
        const newList = [
          ...listCaptures,
          {id: uuidv4(), ...value, checked:false}
        ]
    
        localStorage.setItem("listCaptures", JSON.stringify(newList));
        
        setListCaptures(newList);

        console.log({value});
    
      }

      return (
        <div className="container text-center">
          <div className="row">
            <div className="col-auto"></div>
            <div className="col">
              <h1>CAPTURAS</h1>
              <NewCaptutemButton handleButton={handleNewListCaptureButton} />
            </div>
          </div>
          <hr />
          {
            listCaptures.length === 0 && (
              <h2>
                agregar a la lista ...
              </h2>
            )
          }
          {
            listCaptures.map((lisCapture)=>(
              <LisCapture
              key={lisCapture.id}
              item={lisCapture}
              listCaptures={listCaptures}
              setListCaptures={setListCaptures} />
            ))
          }
        </div>
      )
  }
  
  export default App
  