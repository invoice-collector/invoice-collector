
import { SketchCollector } from '../../sketchCollector';

export class CyberportCollector extends SketchCollector {

    static CONFIG = {
        id: "cyberport",
        name: "CyberPort",
        description: "i18n.collectors.cyberport.description",
        version: "0",
        website: "https://www.cyberport.de/tools/my-account.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/441.jpg",
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
        entryUrl: "https://www.cyberport.de/tools/my-account.html",
    }

    constructor() {
        super(CyberportCollector.CONFIG);
    }
}
