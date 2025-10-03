
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AprCollector extends SketchCollector {

    static CONFIG = {
        id: "apr",
        name: "APR",
        description: "i18n.collectors.apr.description",
        version: "0",
        website: "https://goapr.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179348.jpg",
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
        entryUrl: "https://goapr.de/account/order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AprCollector.CONFIG);
    }
}
