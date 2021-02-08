function empleado(nombre, apellido, esEmpleado) {
    if (esEmpleado === void 0) { esEmpleado = false; }
    if (esEmpleado) {
        return nombre + " " + apellido + " es un empleado";
    }
    else {
        return nombre + " " + apellido + " no es un empleado";
    }
}
