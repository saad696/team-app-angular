import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  reset() {
    this.errorMessage = '';
    this.newMemberName = '';
    this.numberOfTeams = '';
    this.members = [];
    this.teams = [];
  }

  onNoOfTeams(number: string) {
    this.numberOfTeams = +number;
  }

  onInputChange(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    console.log(this.newMemberName);
    this.teams = [];
    if (this.newMemberName) {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Name cannot be empty!';
    }
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) return;
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }
    this.errorMessage = '';
    const allMembers: string[] = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex: number = Math.floor(
          Math.random() * allMembers.length
        );
        const member: string = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    (this.numberOfTeams = ''), (this.members = []);
  }
}
