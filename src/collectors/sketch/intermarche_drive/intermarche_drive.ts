
import { SketchCollector } from '../../sketchCollector';

export class IntermarcheDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "intermarche_drive",
        name: "Intermarche Drive",
        description: "i18n.collectors.intermarche_drive.description",
        version: "0",
        website: "https://drive.intermarche.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27340.jpg",
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
        entryUrl: "https://drive.intermarche.com/",
    }

    constructor() {
        super(IntermarcheDriveCollector.CONFIG);
    }
}
