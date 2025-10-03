
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BouwmaatCollector extends SketchCollector {

    static CONFIG = {
        id: "bouwmaat",
        name: "Bouwmaat",
        description: "i18n.collectors.bouwmaat.description",
        version: "0",
        website: "https://www.bouwmaat.nl/inloggen-of-registreren",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32707.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.bouwmaat.nl/inloggen-of-registreren",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BouwmaatCollector.CONFIG);
    }
}
