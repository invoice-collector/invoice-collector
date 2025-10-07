
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdtelligenceCollector extends SketchCollector {

    static CONFIG = {
        id: "adtelligence",
        name: "ADTELLIGENCE",
        description: "i18n.collectors.adtelligence.description",
        version: "0",
        website: "https://adtelligence.com/de/about-us/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/546.jpg",
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
        entryUrl: "https://adtelligence.com/de/about-us/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdtelligenceCollector.CONFIG);
    }
}
