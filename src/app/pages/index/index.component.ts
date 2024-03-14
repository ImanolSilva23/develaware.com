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

  obtenerPhrase(): void {
    this.phraseService.phrase().subscribe({
      next: (data) => {
        Swal.fire({
          text: data.quote,
          showConfirmButton: false,
          timer: 3000
        });
      },
      error: (err) => {
        console.error('Error al obtener frase:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal al obtener la frase!'
        });
      }
    });
  }

  obtenerResponse(): void {
    this.phraseService.makeHeadRequest().subscribe({
      next: (response) => {
        const headers = response.headers.keys().map((key: any) => `${key}: ${response.headers.get(key)}`).join('\n');
        Swal.fire({
          title: 'Encabezados de respuesta',
          text: headers,
          icon: 'info'
        });
      },
      error: (err) => {
        console.error('Error al obtener respuesta:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal al obtener la respuesta!'
        });
      }
    });
  }

  actualizarDatos(): void {
    // Asumiendo que tienes un método makePutRequest en PhrasesService
    const newData = { userId: 1, id: 1, title: 'Peticion PUT', body: 'Nuevo contenido' };
    this.phraseService.makePutRequest(newData).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Datos actualizados correctamente',
          text: `id Usuario: ${response.userId}, title: ${response.title}`,
          icon: 'success'
        });
      },
      error: (err) => {
        console.error('Error al actualizar datos:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal al actualizar los datos!'
        });
      }
    });
  }

  enviarDatos(): void {
    // Asumiendo que tienes un método makePostRequest en PhrasesService
    const newData = { userId: 1000, id: 1000, title: 'Peticion POST', body: 'Nueva peticion POST' };
    this.phraseService.makePostRequest(newData).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Datos insertados correctamente',
          text: `id Usuario: ${response.userId}, title: ${response.title}, contenido: ${response.body}`,
          icon: 'success'
        });
      },
      error: (err) => {
        console.error('Error al enviar datos:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal al enviar los datos!'
        });
      }
    });
  }
}
