
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DentsplySironaCollector extends SketchCollector {

    static CONFIG = {
        id: "dentsply_sirona",
        name: "Dentsply Sirona",
        description: "i18n.collectors.dentsply_sirona.description",
        version: "0",
        website: "https://www.dentsplysirona.com/de-de/shop/nutzer/mein-konto/bestellhistorie.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4582934.jpg",
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
        entryUrl: "https://www.dentsplysirona.com/de-de/shop/nutzer/mein-konto/bestellhistorie.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DentsplySironaCollector.CONFIG);
    }
}
