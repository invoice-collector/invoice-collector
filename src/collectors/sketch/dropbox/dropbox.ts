
import { SketchCollector } from '../../sketchCollector';

export class DropboxCollector extends SketchCollector {

    static CONFIG = {
        id: "dropbox",
        name: "DropBox",
        description: "i18n.collectors.dropbox.description",
        version: "0",
        website: "https://www.dropbox.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/375.jpg",
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
        entryUrl: "https://www.dropbox.com",
    }

    constructor() {
        super(DropboxCollector.CONFIG);
    }
}
