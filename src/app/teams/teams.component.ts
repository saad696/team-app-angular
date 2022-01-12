import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  @Input() team: string[] = []
  @Input() index = 0

  constructor() { }

  ngOnInit(): void {
  }

}
