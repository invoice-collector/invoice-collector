
import { SketchCollector } from '../../sketchCollector';

export class O2onlineDeCollector extends SketchCollector {

    static CONFIG = {
        id: "o2online_de",
        name: "o2online.de",
        description: "i18n.collectors.o2online_de.description",
        version: "0",
        website: "https://www.o2online.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/332.jpg",
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
        entryUrl: "https://www.o2online.de",
    }

    constructor() {
        super(O2onlineDeCollector.CONFIG);
    }
}
