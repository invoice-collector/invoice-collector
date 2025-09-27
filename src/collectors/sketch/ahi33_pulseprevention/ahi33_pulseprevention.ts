
import { SketchCollector } from '../../sketchCollector';

export class Ahi33PulsepreventionCollector extends SketchCollector {

    static CONFIG = {
        id: "ahi33_pulseprevention",
        name: "Ahi33 - PulsePrevention",
        description: "i18n.collectors.ahi33_pulseprevention.description",
        version: "0",
        website: "https://portailahi33.pulseprevention.com/Documents/Invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503421.jpg",
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
        entryUrl: "https://portailahi33.pulseprevention.com/Documents/Invoicing",
    }

    constructor() {
        super(Ahi33PulsepreventionCollector.CONFIG);
    }
}
