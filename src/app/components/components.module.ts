import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { AlterarsenhaComponent } from './alterarsenha/alterarsenha.component';
import { AlteraremailComponent } from './alteraremail/alteraremail.component';
import { LogoutComponent } from './logout/logout.component';
import { MenutopComponent } from './menutop/menutop.component';
import { MenuleftComponent } from './menuleft/menuleft.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, DetalheComponent, CarteiraComponent, AlterarsenhaComponent, AlteraremailComponent, LogoutComponent, MenutopComponent, MenuleftComponent]
})
export class ComponentsModule { }
