
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScreenfeedCollector extends SketchCollector {

    static CONFIG = {
        id: "screenfeed",
        name: "Screenfeed",
        description: "i18n.collectors.screenfeed.description",
        version: "0",
        website: "https://www.screenfeed.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/544929.jpg",
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
        entryUrl: "https://www.screenfeed.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScreenfeedCollector.CONFIG);
    }
}
