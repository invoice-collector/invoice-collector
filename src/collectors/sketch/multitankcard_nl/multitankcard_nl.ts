
import { SketchCollector } from '../../sketchCollector';

export class MultitankcardNlCollector extends SketchCollector {

    static CONFIG = {
        id: "multitankcard_nl",
        name: "MultiTankCard.nl",
        description: "i18n.collectors.multitankcard_nl.description",
        version: "0",
        website: "https://www.mtc.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32385.jpg",
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
        entryUrl: "https://www.mtc.nl/inloggen",
    }

    constructor() {
        super(MultitankcardNlCollector.CONFIG);
    }
}
