
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeliverooCollector extends SketchCollector {

    static CONFIG = {
        id: "deliveroo",
        name: "deliveroo",
        description: "i18n.collectors.deliveroo.description",
        version: "0",
        website: "https://deliveroo.de/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20093.jpg",
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
        entryUrl: "https://deliveroo.de/de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeliverooCollector.CONFIG);
    }
}
