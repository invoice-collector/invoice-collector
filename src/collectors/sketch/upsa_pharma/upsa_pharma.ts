
import { SketchCollector } from '../../sketchCollector';

export class UpsaPharmaCollector extends SketchCollector {

    static CONFIG = {
        id: "upsa_pharma",
        name: "UPSA Pharma",
        description: "i18n.collectors.upsa_pharma.description",
        version: "0",
        website: "https://www.upsapharma.com/upsa/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496959.jpg",
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
        entryUrl: "https://www.upsapharma.com/upsa/",
    }

    constructor() {
        super(UpsaPharmaCollector.CONFIG);
    }
}
