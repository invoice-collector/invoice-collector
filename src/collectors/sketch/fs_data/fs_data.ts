
import { SketchCollector } from '../../sketchCollector';

export class FsDataCollector extends SketchCollector {

    static CONFIG = {
        id: "fs_data",
        name: "FS Data",
        description: "i18n.collectors.fs_data.description",
        version: "0",
        website: "https://fsdata.se/support/kontrollpanel-waff/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9336.jpg",
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
        entryUrl: "https://fsdata.se/support/kontrollpanel-waff/",
    }

    constructor() {
        super(FsDataCollector.CONFIG);
    }
}
