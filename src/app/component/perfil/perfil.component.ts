import { Component, ElementRef, ViewChild  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public info: Usuario | undefined;
  public editInfo: Usuario | undefined;

  constructor(
    private headerService: PerfilService,
    private authService: AutenticacionService
  ) { }



  ngOnInit() {
    this.getInfo();
  }

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }
  
  public getInfo(): void {
    this.headerService.getInfo().subscribe({
      next: (response: Usuario) => {
        this.info = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        console.log('Llamada completada.');
      }
    });
  }
  

  public onOpenModal(mode: string, info?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    button.setAttribute('data-bs-target', '#editInfoModal');

    container?.appendChild(button);
    button.click();
  }
  public onUpdateInfo(info: Usuario): void {
    this.editInfo = info;
    this.headerService.updateInfo(info).subscribe({
      next: (response: Usuario) => {
       /*  console.log(response) */
        this.getInfo();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }



  /* @ViewChild('content') content!: ElementRef;

  descargarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const content = this.content.nativeElement;
    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps= doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('cv.pdf');
    });
  } */


}
