import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';
import Guardado from "./Guardado";

const LisCapture = ({
      item,
      listCaptures,
      setListCaptures,
     
}) => {

  const {id, pregunt, resul, resul1, resul2, resulchecked} = item;

  const deleteListCapture = () => {
    const newList = listCaptures.filter((item) => item.id !== id);
    localStorage.setItem("listCaptures", JSON.stringify(newList));
    setListCaptures(newList);

  };

  const newList=[
    ...listCaptures,
    {
      ...item,
      id:uuidv4()
    }
  ]

  const editListCapture = async () => {
    const {value} = await Swal.fire({
        title: "New Item information",
        html: `<input 
                tipe='text' 
                id='pregunt' 
                name='pregunt' 
                class='swal2-input' 
                placeholder='pr'
                value="${pregunt}" 
               />
               <input 
               tipe='text' 
               id='resul' 
               name='resul' 
               class='swal2-input' 
               placeholder='rl'
               value="${resul}"  
              />
              <input 
                tipe='text' 
                id='resul1' 
                name='resul1' 
                class='swal2-input' 
                placeholder='rl1'
                value="${resul1}"  
               />
               <input 
               tipe='text' 
               id='resul2' 
               name='resul2' 
               class='swal2-input' 
               placeholder='rl2'
               value="${resul2}"  
              />
                `,
  
        confirmButtonText: "Guardar pregunta",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: "Dismiss",
        preConfirm: () => {
          const pregunt= Swal.getPopup().querySelector('#pregunt').value;
          const resul= Swal.getPopup().querySelector('#resul').value;
          const resul1= Swal.getPopup().querySelector('#resul1').value;
          const resul2= Swal.getPopup().querySelector('#resul2').value;
        
          if (!pregunt || !resul || !resul1 || !resul2) {
            Swal.showValidationMessage('Please enter an item pregunt');
          }
          return{pregunt, resul, resul1, resul2};
        },
      })
  
      if(!value.pregunt || !value.resul || !value.resul1 || !value.resul2) return;

    const newList = listCaptures.map((item) => {
      if (item.id === id) {
        item.pregunt = value.pregunt;
        item.resul = value.resul;
        item.resul1 = value.resul1;
        item.resul2 = value.resul2;
      }
      return item;
    })
    
    localStorage.setItem("listCaptures", JSON.stringify(newList));
    setListCaptures(newList);
  }

    const GuarResulButton = () => {
      const resulchecked  = document.querySelector(`input[name="respuesta"]:checked`).value;
      const newList = listCaptures.map((item) => {
        if (item.id===id) {
          item.resulchecked = resulchecked;
        }
        return item;
      })
      localStorage.setItem("listCaptures", JSON.stringify(newList));
      setListCaptures(newList);
    }

      return (
        <div className="row">
            <div className="col-auto">
            </div>
            <div className="col-2 col-md-3 text-start">
              {"¿"}{pregunt}{"?"}
            </div>
            <div className="col-2 col-md-2 text-start">
              {"A:_"}{resul}
            </div>
            <div className="col-2 col-md-2 text-start">
              {"B:_"}{resul1}
            </div>
            <div className="col-2 col-md-2 text-start">
              {"C:_"}{resul2}
            </div>
            <div className="col-2 col-md-2 btn-group-sm text-end" role="group">
              <button
              className="btn btn-outline-info"
              onClick={editListCapture}>
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
              className="btn btn-outline-danger"
              onClick={deleteListCapture}>
                <i class="bi bi-trash3-fill"></i>
              </button>
                <Guardado
                resul={resul}
                resul1={resul1}
                resul2={resul2}
                resulchecked={resulchecked}
                GuarResulButton={GuarResulButton}
                />
            </div>
        </div>
      );
}

export default LisCapture;