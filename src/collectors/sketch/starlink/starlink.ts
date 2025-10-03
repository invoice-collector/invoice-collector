
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StarlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "starlink",
        name: "Starlink",
        description: "i18n.collectors.starlink.description",
        version: "0",
        website: "https://www.starlink.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/813717.jpg",
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
        entryUrl: "https://www.starlink.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StarlinkCollector.CONFIG);
    }
}
