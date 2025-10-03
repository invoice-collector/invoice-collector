
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CheckrobinCollector extends SketchCollector {

    static CONFIG = {
        id: "checkrobin",
        name: "checkrobin",
        description: "i18n.collectors.checkrobin.description",
        version: "0",
        website: "https://checkrobin.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823857.jpg",
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
        entryUrl: "https://checkrobin.com/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CheckrobinCollector.CONFIG);
    }
}
