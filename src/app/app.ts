import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Finalsis313MarceloAronCondoriFLores';
}
