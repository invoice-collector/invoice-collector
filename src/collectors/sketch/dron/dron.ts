
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DronCollector extends SketchCollector {

    static CONFIG = {
        id: "dron",
        name: "DRON",
        description: "i18n.collectors.dron.description",
        version: "0",
        website: "https://extranet.dron.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421223.jpg",
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
        entryUrl: "https://extranet.dron.com/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DronCollector.CONFIG);
    }
}
