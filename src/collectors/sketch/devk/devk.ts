
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DevkCollector extends SketchCollector {

    static CONFIG = {
        id: "devk",
        name: "DEVK",
        description: "i18n.collectors.devk.description",
        version: "0",
        website: "https://meine.devk.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/937735.jpg",
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
        entryUrl: "https://meine.devk.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DevkCollector.CONFIG);
    }
}
