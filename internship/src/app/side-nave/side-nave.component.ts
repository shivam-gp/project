import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.css']
})
export class SideNaveComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute ) { }
logout(){
  this.router.navigate(['/home']);
}
  ngOnInit(): void {
  }

}
