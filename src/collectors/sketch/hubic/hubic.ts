
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HubicCollector extends SketchCollector {

    static CONFIG = {
        id: "hubic",
        name: "Hubic",
        description: "i18n.collectors.hubic.description",
        version: "0",
        website: "https://hubic.com/home/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137042.jpg",
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
        entryUrl: "https://hubic.com/home/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HubicCollector.CONFIG);
    }
}
