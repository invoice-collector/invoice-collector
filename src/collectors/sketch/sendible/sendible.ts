
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SendibleCollector extends SketchCollector {

    static CONFIG = {
        id: "sendible",
        name: "Sendible",
        description: "i18n.collectors.sendible.description",
        version: "0",
        website: "https://app.sendible.com/#manage/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71045.jpg",
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
        entryUrl: "https://app.sendible.com/#manage/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SendibleCollector.CONFIG);
    }
}
