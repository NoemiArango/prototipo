import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

interface Step {
  key: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  private fb = inject(FormBuilder);

  steps: Step[] = [
    { key: 'personal', label: 'Datos personales', icon: 'person' },
    { key: 'cuenta', label: 'Datos de cuenta', icon: 'lock' },
    { key: 'rol', label: 'Rol y permisos', icon: 'shield' },
    { key: 'confirmacion', label: 'Confirmación', icon: 'check_circle' }
  ];

  currentStep = signal(0);
  submitted = signal(false);

  form = this.fb.group({
    personal: this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    }),
    cuenta: this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator }),
    rol: this.fb.group({
      rol: ['', Validators.required],
      departamento: ['', Validators.required],
      estado: ['activo', Validators.required]
    })
  });

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmarPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  get personalGroup() { return this.form.get('personal'); }
  get cuentaGroup() { return this.form.get('cuenta'); }
  get rolGroup() { return this.form.get('rol'); }

  isStepValid(index: number): boolean {
    const key = this.steps[index].key;
    if (key === 'confirmacion') return this.form.valid;
    const group = this.form.get(key);
    return group ? group.valid : true;
  }

  goToStep(index: number) {
    
    if (index <= this.currentStep() || this.isStepValid(this.currentStep())) {
      this.currentStep.set(index);
    }
  }

  next() {
    const key = this.steps[this.currentStep()].key;
    const group = this.form.get(key);
    if (group && group.invalid) {
      group.markAllAsTouched();
      return;
    }
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update(v => v + 1);
    }
  }

  prev() {
    if (this.currentStep() > 0) {
      this.currentStep.update(v => v - 1);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    console.log('Formulario enviado:', this.form.value);
  }

  progressPercent = computed(() => {
    return (this.currentStep() / (this.steps.length - 1)) * 100;
  });
}