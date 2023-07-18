import { Component, OnInit } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: GalleryItem[] = [];

  ngOnInit() {
    this.images = [];
    for (let i = 1; i <= 8; i++) {
      const imagePath = `assets/gallery/${i}.png`;
      this.images.push(new ImageItem({ src: imagePath, thumb: imagePath }));
    }
  }
}