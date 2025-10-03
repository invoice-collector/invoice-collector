
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NordnetCollector extends SketchCollector {

    static CONFIG = {
        id: "nordnet",
        name: "NordNet",
        description: "i18n.collectors.nordnet.description",
        version: "0",
        website: "https://client.nordnet.com/identification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137015.jpg",
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
        entryUrl: "https://client.nordnet.com/identification",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NordnetCollector.CONFIG);
    }
}
