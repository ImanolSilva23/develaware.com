import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  mission = 'We are dedicated to providing high-quality products that enhance the lives of our customers.';
  vision = 'To become a global leader in innovation, setting new standards in our industry.';
  values = 'Integrity, Excellence, Innovation, and Customer Satisfaction are the core values that drive our business.';

  showMoreInfo(title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon: 'info',
      confirmButtonText: 'Close',
      customClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  updateMission(event: Event) {
    const target = event.target as HTMLElement; // Correcto uso de casting aquí
    this.mission = target.innerText;
  }

  updateVision(event: Event) {
    const target = event.target as HTMLElement; // Correcto uso de casting aquí
    this.vision = target.innerText;
  }

  updateValues(event: Event) {
    const target = event.target as HTMLElement; // Correcto uso de casting aquí
    this.values = target.innerText;
  }
}

