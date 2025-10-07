
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApifyCollector extends SketchCollector {

    static CONFIG = {
        id: "apify",
        name: "Apify",
        description: "i18n.collectors.apify.description",
        version: "0",
        website: "https://my.apify.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131943.jpg",
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
        entryUrl: "https://my.apify.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApifyCollector.CONFIG);
    }
}
