import { Component, OnInit } from '@angular/core';
import { dataCodeTidBits } from '../data-codetidbits';

@Component({
  selector: 'app-code-tidbits',
  templateUrl: './code-tidbits.component.html',
  styleUrls: ['./code-tidbits.component.scss']
})
export class CodeTidbitsComponent implements OnInit {
  data: any;
  isHacktoberfest: boolean;
  constructor() {
    this.data = dataCodeTidBits;
    this.isHacktoberfest = true;
  }

  ngOnInit() {
    setInterval(()=>{
      this.isHacktoberfest = !this.isHacktoberfest
    },3000)
  }
}
