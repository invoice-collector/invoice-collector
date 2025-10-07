
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FinanzpartnernetzCollector extends SketchCollector {

    static CONFIG = {
        id: "finanzpartnernetz",
        name: "Finanzpartnernetz",
        description: "i18n.collectors.finanzpartnernetz.description",
        version: "0",
        website: "https://www2.finanzpartnernetz.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180770.jpg",
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
        entryUrl: "https://www2.finanzpartnernetz.de/auszahlungen.cgi",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FinanzpartnernetzCollector.CONFIG);
    }
}
