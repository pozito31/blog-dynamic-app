import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  // Evento para 
  @Output() clickOutsideElement: EventEmitter<MouseEvent>;

  constructor(private elementRef: ElementRef) {
    this.clickOutsideElement = new EventEmitter<MouseEvent>();
  }

  /**
   * Evento que salta al hacer click en cualquier elemento de la web
   * @param event Evento devuelto
   */
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    // Elemento donde se ha clickado
    const targetElement = event.target as HTMLElement;

    // Si el elemento donde esta la directiva, no contiene el elemento clicado lanza un evento para cerrarse 
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      console.log("Mando un aviso de que estoy fuera del elemento");

      this.clickOutsideElement.emit(event);
    }


  }

}