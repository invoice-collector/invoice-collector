
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApetizCollector extends SketchCollector {

    static CONFIG = {
        id: "apetiz",
        name: "apetiz",
        description: "i18n.collectors.apetiz.description",
        version: "0",
        website: "https://www.apetiz.com/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976558.jpg",
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
        entryUrl: "https://www.apetiz.com/connexion/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApetizCollector.CONFIG);
    }
}
