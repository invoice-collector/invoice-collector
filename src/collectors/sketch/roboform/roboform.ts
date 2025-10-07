
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RoboformCollector extends SketchCollector {

    static CONFIG = {
        id: "roboform",
        name: "RoboForm",
        description: "i18n.collectors.roboform.description",
        version: "0",
        website: "https://online.roboform.com/login?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49768.jpg",
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
        entryUrl: "https://online.roboform.com/login?lang=en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RoboformCollector.CONFIG);
    }
}
