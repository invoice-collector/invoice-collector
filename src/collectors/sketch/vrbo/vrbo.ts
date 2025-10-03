
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VrboCollector extends SketchCollector {

    static CONFIG = {
        id: "vrbo",
        name: "VRBO",
        description: "i18n.collectors.vrbo.description",
        version: "0",
        website: "https://www.vrbo.com/p/properties",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881766.jpg",
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
        entryUrl: "https://www.vrbo.com/p/properties",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VrboCollector.CONFIG);
    }
}
