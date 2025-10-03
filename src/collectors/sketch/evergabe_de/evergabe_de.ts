
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvergabeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "evergabe_de",
        name: "eVergabe.de",
        description: "i18n.collectors.evergabe_de.description",
        version: "0",
        website: "http://www.evergabe.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60385.jpg",
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
        entryUrl: "http://www.evergabe.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvergabeDeCollector.CONFIG);
    }
}
