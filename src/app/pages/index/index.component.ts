import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhrasesService } from '../../phrases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  constructor(private phraseService: PhrasesService) {}

  async obtenerPhrase(): Promise<void> {
    try {
      const data = await this.phraseService.phrase().toPromise();
      
      if (data && data.quote) {
        Swal.fire({
          text: data.quote,
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        throw new Error('No se recibió la frase esperada.');
      }
    } catch (error) {
      console.error('Error al obtener frase:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al obtener la frase!'
      });
    }
  }

  async obtenerResponse(): Promise<void> {
    try {
      const response = await this.phraseService.makeHeadRequest().toPromise();
      const headers = response.headers.keys().map((key: any) => `${key}: ${response.headers.get(key)}`).join('\n');
      Swal.fire({
        title: 'Encabezados de respuesta',
        text: headers,
        icon: 'info'
      });
    } catch (error) {
      console.error('Error al obtener respuesta:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al obtener la respuesta!'
      });
    }
  }

  async actualizarDatos(): Promise<void> {
    try {
      const newData = { userId: 1, id: 1, title: 'Peticion PUT', body: 'Nuevo contenido' };
      const response = await this.phraseService.makePutRequest(newData).toPromise();
  
      // Manejo de la respuesta exitosa
      Swal.fire({
        title: 'Datos actualizados correctamente',
        text: `id Usuario: ${response.userId}, title: ${response.title}`,
        icon: 'success'
      });
    } catch (error) {
      // Manejo de errores
      console.error('Error al actualizar datos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al actualizar los datos!'
      });
    }
  }

  async enviarDatos(): Promise<void> {
    try {
      const newData = { userId: 1000, id: 1000, title: 'Peticion POST', body: 'Nueva peticion POST' };
      const response = await this.phraseService.makePostRequest(newData).toPromise();
      Swal.fire({
        title: 'Datos insertados correctamente',
        text: `id Usuario: ${response.userId}, title: ${response.title}, contenido: ${response.body}`,
        icon: 'success'
      });
    } catch (error) {
      console.error('Error al enviar datos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al enviar los datos!'
      });
    }
  }
}
