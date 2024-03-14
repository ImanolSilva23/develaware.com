import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { CrudComponent } from "./pages/crud/crud.component";
import { PlansComponent } from "./pages/plans/plans.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet, // Para la colocación de componentes basados en la ruta.
    IndexComponent,
    AboutusComponent,
    CrudComponent,
    PlansComponent,
    RouterLink, 
    // Esto generalmente no es necesario aquí, considera usar RouterLink directamente en tus plantillas HTML.
  ],
  
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"], // Corregido a 'styleUrls' y debe ser un array.
})
export class AppComponent {
  title = "develaware.com";
}

