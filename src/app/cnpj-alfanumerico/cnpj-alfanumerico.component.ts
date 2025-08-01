import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Clipboard } from '@angular/cdk/clipboard';
import { CNPJ } from '../cnpj';

@Component({
  selector: 'app-cnpj-alfanumerico',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  templateUrl: './cnpj-alfanumerico.component.html',
  styleUrls: ['./cnpj-alfanumerico.component.scss']
})
export class CNPJAlfanumericoComponent {
  protected readonly generatedCNPJ = signal<string>('');
  protected readonly formattedCNPJ = signal<string>('');
  protected readonly includeMask = signal<boolean>(true);
  protected readonly displayedCNPJ = signal<string>('');

  protected readonly cnpjToValidate = signal<string>('');
  protected readonly validationResult = signal<boolean | null>(null);

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {}

  generateCNPJ(): void {
    const newCNPJ = CNPJ.gerarCNPJAlfanumerico();
    this.generatedCNPJ.set(newCNPJ);
    this.formattedCNPJ.set(CNPJ.formatarCNPJ(newCNPJ));
    this.updateDisplay();
  }

  toggleMask(include: boolean): void {
    this.includeMask.set(include);
    this.updateDisplay();
  }

  private updateDisplay(): void {
    if (this.generatedCNPJ()) {
      const cnpjToDisplay = this.includeMask() 
        ? this.formattedCNPJ() 
        : this.generatedCNPJ();
      this.displayedCNPJ.set(cnpjToDisplay);
    }
  }

  copyCNPJ(): void {
    const cnpjToCopy = this.includeMask() 
      ? this.formattedCNPJ() 
      : this.generatedCNPJ();
      
    if (cnpjToCopy && this.clipboard.copy(cnpjToCopy)) {
      const copiedType = this.includeMask() ? 'formatado' : 'não formatado';
      this.snackBar.open(`CNPJ ${copiedType} copiado para a área de transferência!`, 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    } else {
      this.snackBar.open('Erro ao copiar CNPJ', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }

  onCNPJInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.cnpjToValidate.set(value);
    
    if (value.trim() === '') {
      this.validationResult.set(null);
      return;
    }
    
    try {
      const isValid = CNPJ.isValid(value);
      this.validationResult.set(isValid);
    } catch (error) {
      this.validationResult.set(false);
    }
  }
}
