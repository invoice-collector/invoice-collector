
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeletaxCollector extends SketchCollector {

    static CONFIG = {
        id: "teletax",
        name: "TeleTax",
        description: "i18n.collectors.teletax.description",
        version: "0",
        website: "http://www.teletax.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/85571.jpg",
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
        entryUrl: "http://www.teletax.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeletaxCollector.CONFIG);
    }
}
