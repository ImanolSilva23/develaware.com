import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AboutUs } from '../models/about-us.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private aboutUsSource = new BehaviorSubject<AboutUs>({
    mission: 'Nuestra misión inicial.',
    vision: 'Nuestra visión inicial.',
    values: 'Nuestros valores iniciales.'
  });

  aboutUs$ = this.aboutUsSource.asObservable();

  updateAboutUsInfo(aboutUs: AboutUs) {
    this.aboutUsSource.next(aboutUs);
  }
}
