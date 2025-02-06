import { Component, inject, OnInit } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { AuthService } from '../../core/auth/auth.service';
import { Toolbar } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Avatar, Toolbar, Menu, Button, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  private readonly auth = inject(AuthService);
  protected readonly user = this.auth.getUser();

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sair',
        command: () => {
          this.auth.signout();
        },
      },
    ];
  }
}
