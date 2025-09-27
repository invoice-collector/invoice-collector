
import { SketchCollector } from '../../sketchCollector';

export class AcmeoCollector extends SketchCollector {

    static CONFIG = {
        id: "acmeo",
        name: "acmeo",
        description: "i18n.collectors.acmeo.description",
        version: "0",
        website: "https://msp.infinigate.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12608.jpg",
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
        entryUrl: "https://msp.infinigate.de/login.php",
    }

    constructor() {
        super(AcmeoCollector.CONFIG);
    }
}
