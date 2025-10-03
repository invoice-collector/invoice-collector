
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WeeblyCollector extends SketchCollector {

    static CONFIG = {
        id: "weebly",
        name: "Weebly",
        description: "i18n.collectors.weebly.description",
        version: "0",
        website: "https://www.weebly.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8549.jpg",
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
        entryUrl: "https://www.weebly.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WeeblyCollector.CONFIG);
    }
}
