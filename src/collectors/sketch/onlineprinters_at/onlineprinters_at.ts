
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlineprintersAtCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineprinters_at",
        name: "OnlinePrinters.at",
        description: "i18n.collectors.onlineprinters_at.description",
        version: "0",
        website: "https://www.onlineprinters.at/websale8/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108811.jpg",
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
        entryUrl: "https://www.onlineprinters.at/websale8/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlineprintersAtCollector.CONFIG);
    }
}
