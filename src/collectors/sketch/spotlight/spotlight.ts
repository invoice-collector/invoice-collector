
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpotlightCollector extends SketchCollector {

    static CONFIG = {
        id: "spotlight",
        name: "Spotlight",
        description: "i18n.collectors.spotlight.description",
        version: "0",
        website: "http://www.spotlight.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10554.jpg",
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
        entryUrl: "http://www.spotlight.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpotlightCollector.CONFIG);
    }
}
