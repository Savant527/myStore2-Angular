import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{
  img: string = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') 
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('cange just img =>', this.img)
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;
  constructor() {
    //before render- no async
    console.log('constructor', 'imgValue=> ', this.img);

  }
  ngOnChanges(changes: SimpleChanges) {
     //before -during render - changes inputs
     console.log('ngOnChanges', 'imgValue=> ', this.img);
     console.log('changes',changes)
  }

  ngOnInit(): void {
    // before render - async
    console.log('ngOnInit', 'imgValue=> ', this.img);
  //  this.counterFn = window.setInterval(() => {
  //     this.counter +=1;
  //     console.log('run counter')
  //   },1000);
  }
ngAfterViewInit(): void {
    // agter render - handler children
    console.log('ngOnAfterViewInit');
  }
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError () {
    this.img = this.imageDefault
  }
  imgLoaded(){

    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
