
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WazzupCollector extends SketchCollector {

    static CONFIG = {
        id: "wazzup",
        name: "Wazzup",
        description: "i18n.collectors.wazzup.description",
        version: "0",
        website: "https://app.wazzup24.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4488214.jpg",
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
        entryUrl: "https://app.wazzup24.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WazzupCollector.CONFIG);
    }
}
