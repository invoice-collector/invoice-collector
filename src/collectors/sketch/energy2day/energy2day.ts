
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Energy2dayCollector extends SketchCollector {

    static CONFIG = {
        id: "energy2day",
        name: "Energy2day",
        description: "i18n.collectors.energy2day.description",
        version: "0",
        website: "https://portal.energy2day.de/mailbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098012.jpg",
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
        entryUrl: "https://portal.energy2day.de/mailbox",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Energy2dayCollector.CONFIG);
    }
}
