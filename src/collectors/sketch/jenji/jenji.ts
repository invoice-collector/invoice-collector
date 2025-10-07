
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JenjiCollector extends SketchCollector {

    static CONFIG = {
        id: "jenji",
        name: "Jenji",
        description: "i18n.collectors.jenji.description",
        version: "0",
        website: "https://app.jenji.io/#/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87287.jpg",
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
        entryUrl: "https://app.jenji.io/#/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JenjiCollector.CONFIG);
    }
}
