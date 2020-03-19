import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.meta.addTags([
      {
        name:"og:url" , content: "https://short-warthog-68.localtunnel.me/user"
      },
      {
        name:"og:title" , content: "Hello torongo boy"
      },
      {
        name:"og:image", content:"http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      },
      {
        name:"og:description", content:"How much does culture influence creative thinking?"
      }
    ]);
  console.log(this.meta);

  }

}