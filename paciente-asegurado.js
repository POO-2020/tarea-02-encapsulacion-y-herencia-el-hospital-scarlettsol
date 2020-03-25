import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaVigencia 
     * @param {string} compañia 
     */
    constructor({numeroPoliza, fechaVigencia, compañia, nombre, fecha, telefono}) {
        super({nombre, fecha, telefono});
        this._numeroPoliza = numeroPoliza;
        this._fechaVigencia = fechaVigencia;
        this._compañia = compañia;
        this._nombre = nombre;
        this._fecha = fecha;
        this._telefono = telefono;
    }

    getPerfil(){
        return (`   ${this._nombre.getNombreCompleto()}, 
        ${this._fecha.getFecha()}, 
        ${this._telefono}, 
        ${this._numeroPoliza}, 
        ${this._finVigencia.getFecha()}, 
        ${this._compañia}`)
    }
}