const NewCaptutemButton = ({handleButton}) => {
    return (
      <button 
      type="button" 
      className="btn btn-outline-success btn-sm mt-1 me-1 fw-lighter"
      onClick={handleButton}
      >
        
      <i class="bi bi-plus-circle-fill"></i>
      </button>
    )
  }
  
  export default NewCaptutemButton