import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    @Input() posttitle: string;
    @Input() postcontent: string;
    @Input() postcreatedate: Date;
    @Input() postloveIt: number;

  constructor() { }

  ngOnInit() {
  }
  onlove(){
    this.postloveIt+=1;
  }
  ondontlove(){
      this.postloveIt-=1;
  }
  getColor() {
      if(this.postloveIt==0){
        return 'black';
    }
    else if(this.postloveIt>0) {
      return 'green';
    } else if(this.postloveIt<0) {
      return 'red';
    }

}
    getBackground(){
      if(this.postloveIt==0){
        return 'white';
    }
    else if(this.postloveIt>0) {
      return '#A9F5E1';
    } else if(this.postloveIt<0) {
      return '#FA8258';
    }
    }


}
