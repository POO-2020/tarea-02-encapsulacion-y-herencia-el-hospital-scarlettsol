import Nombre from './nombre.js';
import Fecha from './fecha.js';

export default class Pacientes {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fechaNacimiento
   * @param {number} numeroTelefono
   */
  constructor({nombre, fechaNacimiento, telefono}) {
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._telefono = telefono;
  }

  getPerfil() {
    return `${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${
      this._telefono
    }`;
  }
}