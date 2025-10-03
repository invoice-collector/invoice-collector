
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeslaCollector extends SketchCollector {

    static CONFIG = {
        id: "tesla",
        name: "Tesla",
        description: "i18n.collectors.tesla.description",
        version: "0",
        website: "https://auth.tesla.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43136.jpg",
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
        entryUrl: "https://auth.tesla.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeslaCollector.CONFIG);
    }
}
