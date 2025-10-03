
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "google_drive",
        name: "Google-Drive",
        description: "i18n.collectors.google_drive.description",
        version: "0",
        website: "https://drive.google.com/drive/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940355.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://drive.google.com/drive/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleDriveCollector.CONFIG);
    }
}
