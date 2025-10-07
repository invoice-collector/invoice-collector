
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeexiCollector extends SketchCollector {

    static CONFIG = {
        id: "leexi",
        name: "Leexi",
        description: "i18n.collectors.leexi.description",
        version: "0",
        website: "https://app.leexi.ai/fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199384.jpg",
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
        entryUrl: "https://app.leexi.ai/fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeexiCollector.CONFIG);
    }
}
