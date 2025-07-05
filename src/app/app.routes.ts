import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Clientes } from './pages/clientes/clientes';
import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [
    { path: 'inicio', component: Inicio},
    { path: 'clientes', component: Clientes },
    { path: 'formulario', component: Formulario },
    { path: '**', redirectTo: '' } 
];
