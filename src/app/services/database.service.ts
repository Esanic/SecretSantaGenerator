import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Path } from '../models/path';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbPath = '/paths'

  databaseRef: AngularFirestoreCollection<Path>;

  constructor(private db: AngularFirestore) {
    this.databaseRef = db.collection(this.dbPath);
  }

  create(path: Path): any {
    return this.databaseRef.add({...path});
  }

  update(key: string, data: any): Promise<void>{
    return this.databaseRef.doc(key).update(data);
  }

  delete(key: string): Promise<void> {
    return this.databaseRef.doc(key).delete();
  }

  getAll(): AngularFirestoreCollection<Path> {
    return this.databaseRef;
  }

  public generateAlphabet() {
    const rnd = Math.floor(Math.random() * 2);
    let capital = rnd==1 ? true : false;
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

}
