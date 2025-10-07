
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OekostromAtCollector extends SketchCollector {

    static CONFIG = {
        id: "oekostrom_at",
        name: "Oekostrom AT",
        description: "i18n.collectors.oekostrom_at.description",
        version: "0",
        website: "https://mein.oekostrom.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3498.jpg",
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
        entryUrl: "https://mein.oekostrom.at/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OekostromAtCollector.CONFIG);
    }
}
