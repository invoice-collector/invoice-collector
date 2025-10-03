
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SdeaCollector extends SketchCollector {

    static CONFIG = {
        id: "sdea",
        name: "SDEA",
        description: "i18n.collectors.sdea.description",
        version: "0",
        website: "https://client.sdea.fr/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4447090.jpg",
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
        entryUrl: "https://client.sdea.fr/fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SdeaCollector.CONFIG);
    }
}
