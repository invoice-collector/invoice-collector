
import { SketchCollector } from '../../sketchCollector';

export class BeleuchtungdirektCollector extends SketchCollector {

    static CONFIG = {
        id: "beleuchtungdirekt",
        name: "Beleuchtungdirekt",
        description: "i18n.collectors.beleuchtungdirekt.description",
        version: "0",
        website: "http://www.beleuchtungdirekt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65658.jpg",
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
        entryUrl: "http://www.beleuchtungdirekt.de",
    }

    constructor() {
        super(BeleuchtungdirektCollector.CONFIG);
    }
}
