import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      cpf: ['', [Validators.required, this.cpfValidator]],
      login: ['', [Validators.required, Validators.minLength(4)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
    }, { validators: this.senhasCoincidem });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      // Aqui você pode processar os dados do formulário
    }
  }

  senhasCoincidem(formGroup: AbstractControl): ValidationErrors | null {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCoincidem: true };
  }

  cpfValidator(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value;
    // Adicione a lógica para validar o CPF (exemplo básico)
    const cpfValido = /^\d{11}$/.test(cpf);
    return cpfValido ? null : { cpfInvalido: true };
  }
}
