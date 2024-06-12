import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        `L'équipe de Jump Force`,
        `Présnetation du trio de choc`,
        `https://xboxsquad.fr/wp-content/uploads/2019/01/Jump-force-crop-1528675323320.jpg`,
        new Date(),
        10
      ),
      new FaceSnap(
        `GrandLine`,
        `1er Boss "Meruem" de Hunter X Hunter`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTydsTxqvqcGj7zp6A8_L8Ki9JcOoV0iuUQ&s`,
        new Date(),
        150
      ),
      new FaceSnap(
        'Japon',
        '2eme boss "Bakugo" de My Hero Academia',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UIcLnXz79-UJ9LCCzzx77O4rOFSEtN3n9Q&s',
        new Date(),
        254
      ),
    ];

    this.faceSnaps[1].setLocation('MarineFord');
  }
}