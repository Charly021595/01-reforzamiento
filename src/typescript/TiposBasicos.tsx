

const TiposBasicos = () => {

    const nombre: string  = "Carlos";
    const edad = 28;
    const estaActivo:boolean = false;

    const poderes: string[] = []; // "Vuela", "Super Fuerza", "Velocidad", "Respirar Bajo Agua", "Aliento de Hielo", "Visión lazer", "Poderes de araña"

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'Desactivado'}
      <br/>
      {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos
