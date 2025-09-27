
import { SketchCollector } from '../../sketchCollector';

export class UberEatsDeCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_eats_de",
        name: "Uber Eats DE",
        description: "i18n.collectors.uber_eats_de.description",
        version: "0",
        website: "https://www.ubereats.com/de/orders#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1229803.jpg",
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
        entryUrl: "https://www.ubereats.com/de/orders#",
    }

    constructor() {
        super(UberEatsDeCollector.CONFIG);
    }
}
