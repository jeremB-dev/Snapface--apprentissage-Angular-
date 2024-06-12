import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      `L'équipe de Jump Force, c\'est fou !!`,
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
    ).withLocation('MarineFord'),
    new FaceSnap(
      'Japon',
      '2eme boss "Bakugo" de My Hero Academia',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UIcLnXz79-UJ9LCCzzx77O4rOFSEtN3n9Q&s',
      new Date(),
      254
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}
