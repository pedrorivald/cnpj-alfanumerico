import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CNPJAlfanumericoComponent } from './cnpj-alfanumerico/cnpj-alfanumerico.component';
import { FooterComponent } from './footer/footer.component';
import { ExplanatorySectionComponent } from './explanatory-section/explanatory-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CNPJAlfanumericoComponent, FooterComponent, ExplanatorySectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cnpj-alfanumerico');
}
