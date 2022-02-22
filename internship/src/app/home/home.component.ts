import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Total No. of Departments', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Total Candidates Trained', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'No. of Candidates Allotted', cols: 1, rows: 1, color: 'lightblue'},
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }
next(){
  this.router.navigate(['/sidenav']);
}
  ngOnInit(): void {
  }

}
