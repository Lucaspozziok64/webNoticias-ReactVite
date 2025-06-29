  const categorias = [
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "world", label: "Internacional" },
    { value: "politics", label: "Política" },
  ];

const Formulario = ({ setCategoria, setMostrarSpinner }) => {

  const handleChange = (e) => {
    setMostrarSpinner(true)
    setCategoria(e.target.value);
  };

  return (
    <form className="container d-flex formulario">
      <label style={{ fontStyle: "italic" }}>Buscar por categoria:</label>
      <select className="form-select" onChange={handleChange}>
        <option value="">Selecciona una categoria</option>
        {categorias.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Formulario;
