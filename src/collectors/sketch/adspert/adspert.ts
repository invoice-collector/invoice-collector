
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdspertCollector extends SketchCollector {

    static CONFIG = {
        id: "adspert",
        name: "adspert",
        description: "i18n.collectors.adspert.description",
        version: "0",
        website: "https://www.adspert.de/user/login?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/538.jpg",
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
        entryUrl: "https://www.adspert.de/user/login?lang=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdspertCollector.CONFIG);
    }
}
