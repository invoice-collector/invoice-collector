
import { SketchCollector } from '../../sketchCollector';

export class CyberwebhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "cyberwebhosting",
        name: "Cyberwebhosting",
        description: "i18n.collectors.cyberwebhosting.description",
        version: "0",
        website: "https://cyberwebhosting.de/service/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3835.jpg",
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
        entryUrl: "https://cyberwebhosting.de/service/",
    }

    constructor() {
        super(CyberwebhostingCollector.CONFIG);
    }
}
