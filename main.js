import Nombre from './Nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';
import PacienteAsegurado from "./paciente-asegurado.js";

class Main {
  constructor() {
    this._tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this._tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this._fecha = new Fecha(15, 6, 2005);

    this._nombre = new Nombre('Juan', 'Pérez', 'Díaz');
    this._nombre2 = new Nombre('María', 'Ramos', 'Ramírez');

    this.paciente = new Paciente(this._nombre, this._fecha, 3123454367);

    this._doctor = new Doctor(this._nombre2, 'Cardiólogo', 3125677896, 445566);

    this._cita = new Cita(this._fecha, this._tiempo1, this._doctor, this._paciente);

    this._hospital = new Hospital('Puerta de Hierro', 'Av. Constitución 100');

    this._pacienteAsegurado1 = {
      nombre: new Nombre('Aurora', 'Rojas', 'González'),
      fechaNacimiento: new Fecha(4, 7, 1993),
      telefono: 312879561,
      numeroPoliza: 220893,
      fechaFinVigencia: new Fecha(15, 10, 2010),
      compañia: 'WeGotYou'
    }
  }

  probarTiempo() {
    console.log(this._tiempo1.getFormato12());
    console.log(this._tiempo2.getFormato12());
    console.log(this._tiempo1.getFormato24());
    console.log(this._tiempo2.getFormato24());
  }

  probarFecha() {
    console.log(this._fecha.getAños());
    console.log(this._fecha.getMeses());
    console.log(this._fecha.getSemanas());
    console.log(this._fecha.getDias());
    console.log(this._fecha.getFecha());
    console.log(this._fecha.getDiaFecha());
  }

  probarNombre() {
    console.log(this._nombre.getNombreCompleto());
    console.log(this._nombre.getApellidoNombre());
    console.log(this._nombre.getIniciales());
  }

  probarPaciente() {
    console.log(this._paciente.getPerfil());
  }

  probarDoctor() {
    console.log(this._doctor.getPerfil());
  }

  probarCita() {
    console.log(this._cita.getCita());
  }

  probarHospital() {
    this._hospital.registrarDoctor(this._doctor);
    this._hospital.registrarCita(this._cita);
    this._hospital.listarDoctores();
    this._hospital.listarCitas();
  }

  probarPacienteAsegurado() {
    console.log(this._pacienteAsegurado1.getPerfil())
  }
}

let app = new Main();

app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
app.probarPacienteAsegurado();