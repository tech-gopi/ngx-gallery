import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../../gallery';
import {SharedService} from '../../shared/service/shared.service';

@Component({
  selector: 'basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.scss']
})
export class BasicExampleComponent implements OnInit {

  constructor(private gallery: GalleryService, private shared: SharedService) {
  }

  ngOnInit() {
    this.gallery.load(this.shared.getImages());
  }


}