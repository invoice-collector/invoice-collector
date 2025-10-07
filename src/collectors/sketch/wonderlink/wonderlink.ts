
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WonderlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "wonderlink",
        name: "Wonderlink",
        description: "i18n.collectors.wonderlink.description",
        version: "0",
        website: "https://www.wonderlink.de/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333378.jpg",
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
        entryUrl: "https://www.wonderlink.de/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WonderlinkCollector.CONFIG);
    }
}
