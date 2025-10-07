
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SkySchweizCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_schweiz",
        name: "Sky Schweiz",
        description: "i18n.collectors.sky_schweiz.description",
        version: "0",
        website: "https://www.sky.ch/de/mein-konto/meine-rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066499.jpg",
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
        entryUrl: "https://www.sky.ch/de/mein-konto/meine-rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SkySchweizCollector.CONFIG);
    }
}
