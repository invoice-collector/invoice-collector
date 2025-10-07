
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FrontCollector extends SketchCollector {

    static CONFIG = {
        id: "front",
        name: "Front",
        description: "i18n.collectors.front.description",
        version: "0",
        website: "https://app.frontapp.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59757.jpg",
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
        entryUrl: "https://app.frontapp.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrontCollector.CONFIG);
    }
}
