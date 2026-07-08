import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Input() level = 0;

  expanded = signal(false);

  toggle() {
    if (this.hasChildren) {
      this.expanded.update(v => !v);
    }
  }

  get hasChildren(): boolean {
    return !!this.item.children?.length;
  }
}