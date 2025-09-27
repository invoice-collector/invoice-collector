
import { SketchCollector } from '../../sketchCollector';

export class EnergiewachtCollector extends SketchCollector {

    static CONFIG = {
        id: "energiewacht",
        name: "Energiewacht",
        description: "i18n.collectors.energiewacht.description",
        version: "0",
        website: "http://www.ewacht.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32807.jpg",
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
        entryUrl: "http://www.ewacht.nl",
    }

    constructor() {
        super(EnergiewachtCollector.CONFIG);
    }
}
