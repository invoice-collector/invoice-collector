
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SofengoCollector extends SketchCollector {

    static CONFIG = {
        id: "sofengo",
        name: "Sofengo",
        description: "i18n.collectors.sofengo.description",
        version: "0",
        website: "https://www.sofengo.de/usersettingspayment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1353712.jpg",
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
        entryUrl: "https://www.sofengo.de/usersettingspayment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SofengoCollector.CONFIG);
    }
}
