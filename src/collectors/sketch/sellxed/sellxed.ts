
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SellxedCollector extends SketchCollector {

    static CONFIG = {
        id: "sellxed",
        name: "sellXed",
        description: "i18n.collectors.sellxed.description",
        version: "0",
        website: "https://www.sellxed.com/shop/de/chf/extensions.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77254.jpg",
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
        entryUrl: "https://www.sellxed.com/shop/de/chf/extensions.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SellxedCollector.CONFIG);
    }
}
