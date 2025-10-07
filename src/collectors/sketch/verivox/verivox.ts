
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerivoxCollector extends SketchCollector {

    static CONFIG = {
        id: "verivox",
        name: "Verivox",
        description: "i18n.collectors.verivox.description",
        version: "0",
        website: "https://partner.verivox.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098094.jpg",
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
        entryUrl: "https://partner.verivox.de/auszahlungen.cgi",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerivoxCollector.CONFIG);
    }
}
