
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuetextCollector extends SketchCollector {

    static CONFIG = {
        id: "quetext",
        name: "Quetext",
        description: "i18n.collectors.quetext.description",
        version: "0",
        website: "https://www.quetext.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1384700.jpg",
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
        entryUrl: "https://www.quetext.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuetextCollector.CONFIG);
    }
}
