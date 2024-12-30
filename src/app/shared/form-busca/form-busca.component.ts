import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }
}
