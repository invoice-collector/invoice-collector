
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SternkomCollector extends SketchCollector {

    static CONFIG = {
        id: "sternkom",
        name: "SternKom",
        description: "i18n.collectors.sternkom.description",
        version: "0",
        website: "https://www.sternstrom.de/sternkom/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9447.jpg",
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
        entryUrl: "https://www.sternstrom.de/sternkom/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SternkomCollector.CONFIG);
    }
}
