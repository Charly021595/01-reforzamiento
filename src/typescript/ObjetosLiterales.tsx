
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Carlos',
        edad: 28,
        direccion:{
            pais: 'Mexico',
            casaNo: 1339
        }
    }

  return (
    <>
      <h1>Objetos Literales</h1>
      <code>
        <pre>
            { JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

