
const Formulario = () => {
    return (
        <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
         <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    );
}

export default Formulario;
