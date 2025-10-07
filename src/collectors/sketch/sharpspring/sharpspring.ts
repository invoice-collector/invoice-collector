
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SharpspringCollector extends SketchCollector {

    static CONFIG = {
        id: "sharpspring",
        name: "SharpSpring",
        description: "i18n.collectors.sharpspring.description",
        version: "0",
        website: "https://marketingautomation.services/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2435642.jpg",
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
        entryUrl: "https://marketingautomation.services/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SharpspringCollector.CONFIG);
    }
}
