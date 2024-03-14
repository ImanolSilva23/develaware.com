export interface Item {
  id?: number; // Usar '?' para indicar que es opcional si el id se genera automáticamente
  nombre: string;
  descripcion: string;
  precio?: number; // Si el precio puede ser nulo o no se incluye inicialmente
}
