
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _7travelCollector extends SketchCollector {

    static CONFIG = {
        id: "7travel",
        name: "7TRAVEL",
        description: "i18n.collectors.7travel.description",
        version: "0",
        website: "https://partner.net.7travel.de/app/index.html#/account/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116303.jpg",
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
        entryUrl: "https://partner.net.7travel.de/app/index.html#/account/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_7travelCollector.CONFIG);
    }
}
