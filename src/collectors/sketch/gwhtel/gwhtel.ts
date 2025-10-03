
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GwhtelCollector extends SketchCollector {

    static CONFIG = {
        id: "gwhtel",
        name: "GWHtel",
        description: "i18n.collectors.gwhtel.description",
        version: "0",
        website: "https://portal.gwhtel.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9516.jpg",
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
        entryUrl: "https://portal.gwhtel.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GwhtelCollector.CONFIG);
    }
}
