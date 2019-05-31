import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * Directive to manage file uploads
 */
@Directive({
  selector: '[appFileAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileValueAccessorDirective,
      multi: true
    }
  ]
})
export class FileValueAccessorDirective implements ControlValueAccessor {
  onChange: any;

  @HostListener('change', ['$event.target']) _handleInput(event: any) {
    // Gives back the files that are captured in the form
    this.onChange(event.files);
  }

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) { }

  writeValue(value: any) {
    const normalizedValue = value == null ? '' : value;
    this.render.setProperty(this.element.nativeElement, 'value', normalizedValue);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {  }

  nOnDestroy() {  }
}
