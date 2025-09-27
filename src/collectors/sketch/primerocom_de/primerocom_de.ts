
import { SketchCollector } from '../../sketchCollector';

export class PrimerocomDeCollector extends SketchCollector {

    static CONFIG = {
        id: "primerocom_de",
        name: "primerocom.de",
        description: "i18n.collectors.primerocom_de.description",
        version: "0",
        website: "https://mein.primerocom.de/Default.asp?rq_Lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40863.jpg",
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
        entryUrl: "https://mein.primerocom.de/Default.asp?rq_Lang=de",
    }

    constructor() {
        super(PrimerocomDeCollector.CONFIG);
    }
}
