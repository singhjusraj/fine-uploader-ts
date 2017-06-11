
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FineUploader, UIOptions } from 'fine-uploader'

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

    constructor() { }

    uploader: FineUploader;
    uiOptions: UIOptions;

    ngOnInit(): void {
    }

    ngAfterViewInit(){
        /**
         * Prepare/set options for the core + UI FineUploader
         */
        this.uiOptions = {
            debug: false,
            autoUpload: false,
            element: document.getElementById('fine-uploader-manual-trigger'),
            template: "qq-template-manual-trigger",
            request: {
                endpoint: "/server/upload"
            },
            deleteFile: {
                enabled: true,
                endpoint: '/uploads'
            },
            retry: {
                enableAuto: true
            }
        };

        /**
         * Instantiate the FineUploader and pass in the uiOptions
         */
        this.uploader = new FineUploader(this.uiOptions);
    }

    uploadFiles() {
        this.uploader.uploadStoredFiles();
    }
}
