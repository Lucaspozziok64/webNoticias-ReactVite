const Formulario = () => {
  return (
    <form className="container d-flex formulario">
      <label style={{ fontStyle: 'italic' }}>
        Buscar por categoria:
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected>Opciones</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  );
};

export default Formulario;
