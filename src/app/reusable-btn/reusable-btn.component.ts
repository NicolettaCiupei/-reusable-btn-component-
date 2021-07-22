import {Component, Input, OnInit} from '@angular/core';

interface ClassButton {
  outline: boolean;
  text: boolean;
  disableShadow: boolean;
  disabled: boolean;
  textDisabled: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  default: boolean;
  primary: boolean;
  secondary: boolean;
  danger: boolean
}

@Component({
  selector: 'app-reusable-btn',
  templateUrl: './reusable-btn.component.html',
  styleUrls: ['./reusable-btn.component.css']
})
export class ReusableBtnComponent implements OnInit {
 @Input() customClass: Partial<ClassButton> = {};
 @Input() icon = '/assets/images/btn-icons/local_grocery_store.png';
 @Input() iconPosition: 'left' | 'right';

  constructor() {}

  ngOnInit(): void {}
}
