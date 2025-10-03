
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShortwaveCollector extends SketchCollector {

    static CONFIG = {
        id: "shortwave",
        name: "Shortwave",
        description: "i18n.collectors.shortwave.description",
        version: "0",
        website: "https://app.shortwave.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4569030.jpg",
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
        entryUrl: "https://app.shortwave.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShortwaveCollector.CONFIG);
    }
}
