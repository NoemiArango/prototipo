import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MENU_DATA } from '../models/menu-data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() open = false;
  @Output() closeRequested = new EventEmitter<void>();

  menu = MENU_DATA;

  onNavigate() {
    // al hacer clic en un link dentro de la sidebar (solo relevante en mobile)
    this.closeRequested.emit();
  }
}