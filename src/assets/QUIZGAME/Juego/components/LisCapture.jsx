const ListQuestion = ({
    item,
}) => {

  const {id, pregunt, resul, resul1, resul2} = item;

  
  return(
      <div className="row">
        <div className="col-auto">
        </div>
        <div className="col-3 col-md-3 text-start">
        {"¿"}{pregunt}{"?"}
        </div>
        <div className="col-3 col-md-3 text-start">
          {<input type="radio" name={id} value="true"/>}{"A):"}{resul}{<br/>}

          {<input type="radio" name={id} value="true"/>}{"B:"}{resul1}{<br/>}

          {<input type="radio" name={id} value="true"/>}{"C):"}{resul2}{<br/>}
          {<hr/>}
        </div>
      </div>
  );
}

export default ListQuestion