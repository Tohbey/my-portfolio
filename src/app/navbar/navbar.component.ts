import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  icon= faMicrochip;

  constructor() {
    $(document).ready(function () {

      $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
      });
      $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
      });
      $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
      });
    });
  }

  ngOnInit(): void {
  }
}
