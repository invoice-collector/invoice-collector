
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MetaApiCollector extends SketchCollector {

    static CONFIG = {
        id: "meta_api",
        name: "Meta Api",
        description: "i18n.collectors.meta_api.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444797.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetaApiCollector.CONFIG);
    }
}
