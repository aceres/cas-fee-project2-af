import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Upload } from './models/upload';

@Injectable()
export class UploadService {

  private basePath: string = '/recipes';

  constructor(
    private db: AngularFireDatabase) { }

  pushUpload(upload: Upload, key) {

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${key}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // Upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // Upload failed
        console.log(error)
      },
      () => {
        // Upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        upload.key = key;
        this.saveFileData(upload, key)
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload, key) {
    const refRecipe =  firebase.database().ref('recipes/' + key);
    refRecipe.child('image').set(upload);
  }

  public deleteFileData(key) {

    // Create a reference to the file to delete
    const storageRef = firebase.storage().ref();
    const desertRef = storageRef.child(`${this.basePath}/${key}`)

    // Delete the file
    desertRef.delete().then(function() {
      // File deleted successfully
    }).catch(function(error) {
      // Uh-oh, an error occurred!
    });
  }
}
