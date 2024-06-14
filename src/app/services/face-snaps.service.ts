import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      `L'équipe "Jump Force" : la dreamteam !!`,
      `Présnetation du trio de choc`,
      `https://e0.pxfuel.com/wallpapers/253/698/desktop-wallpaper-anime-jump-force-naruto-games-thumbnail.jpg`,
      new Date(),
      10
    ),
    new FaceSnap(
      `GrandLine: 1er boss `,
      `1er Boss "Meruem" de Hunter X Hunter`,
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTydsTxqvqcGj7zp6A8_L8Ki9JcOoV0iuUQ&s`,
      new Date(),
      150
    ).withLocation('MarineFord'),
    new FaceSnap(
      'Japon: 2eme boss',
      '2eme boss "Bakugo" de My Hero Academia',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UIcLnXz79-UJ9LCCzzx77O4rOFSEtN3n9Q&s',
      new Date(),
      254
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap: FaceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
