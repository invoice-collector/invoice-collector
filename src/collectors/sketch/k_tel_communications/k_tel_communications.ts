
import { SketchCollector } from '../../sketchCollector';

export class KTelCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "k_tel_communications",
        name: "K-TEL COMMUNICATIONS",
        description: "i18n.collectors.k_tel_communications.description",
        version: "0",
        website: "https://www.ktel.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811742.jpg",
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
        entryUrl: "https://www.ktel.de/",
    }

    constructor() {
        super(KTelCommunicationsCollector.CONFIG);
    }
}
