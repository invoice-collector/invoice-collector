
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WhichadsworkCollector extends SketchCollector {

    static CONFIG = {
        id: "whichadswork",
        name: "WhichAdsWork",
        description: "i18n.collectors.whichadswork.description",
        version: "0",
        website: "http://www.whichadswork.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22093.jpg",
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
        entryUrl: "http://www.whichadswork.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhichadsworkCollector.CONFIG);
    }
}
