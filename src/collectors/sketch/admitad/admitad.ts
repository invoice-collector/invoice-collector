
import { SketchCollector } from '../../sketchCollector';

export class AdmitadCollector extends SketchCollector {

    static CONFIG = {
        id: "admitad",
        name: "Admitad",
        description: "i18n.collectors.admitad.description",
        version: "0",
        website: "https://www.admitad.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/229638.jpg",
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
        entryUrl: "https://www.admitad.com/de",
    }

    constructor() {
        super(AdmitadCollector.CONFIG);
    }
}
