
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OutrankingCollector extends SketchCollector {

    static CONFIG = {
        id: "outranking",
        name: "Outranking",
        description: "i18n.collectors.outranking.description",
        version: "0",
        website: "https://apps.outranking.io/accountsetting/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1268961.jpg",
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
        entryUrl: "https://apps.outranking.io/accountsetting/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OutrankingCollector.CONFIG);
    }
}
