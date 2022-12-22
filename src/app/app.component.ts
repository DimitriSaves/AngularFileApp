import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  ngOnInit() {
  }

  title = 'AngularFileApp';

}