
import { SketchCollector } from '../../sketchCollector';

export class SmabtpCollector extends SketchCollector {

    static CONFIG = {
        id: "smabtp",
        name: "SMABTP",
        description: "i18n.collectors.smabtp.description",
        version: "0",
        website: "https://www.services-smabtp.net/monespace/#/documents/contrats",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730405.jpg",
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
        entryUrl: "https://www.services-smabtp.net/monespace/#/documents/contrats",
    }

    constructor() {
        super(SmabtpCollector.CONFIG);
    }
}
