
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BlitzzCollector extends SketchCollector {

    static CONFIG = {
        id: "blitzz",
        name: "Blitzz",
        description: "i18n.collectors.blitzz.description",
        version: "0",
        website: "https://subscriptions.zoho.com/portal/blitzz/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618806.jpg",
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
        entryUrl: "https://subscriptions.zoho.com/portal/blitzz/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlitzzCollector.CONFIG);
    }
}
