import { useState, useRef, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';
import convert from 'xml-js';


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);
  
    useEffect(() => {
      // llamado API
      reqResApi.get('/ListadoAplicaciones')
      .then(resp=>{ 
        // console.log(convert.xml2json(resp.data));
        let datos = convert.xml2js(resp.data);
        let arreglo = datos.elements[0].elements[0].text;
        console.log(JSON.parse(arreglo));
      }).catch(console.log);
    }, [])
  
    const cargarUsuarios = async() => {
      const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
          page: paginaRef.current
        }
      })
  
      if ( resp.data.data.length > 0 ) {
        setUsuarios( resp.data.data );
      }else{
        paginaRef.current --;
        alert('No hay mas registro');
      }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();   
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
