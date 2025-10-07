
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MinutCollector extends SketchCollector {

    static CONFIG = {
        id: "minut",
        name: "Minut",
        description: "i18n.collectors.minut.description",
        version: "0",
        website: "https://web.minut.com/account/settings_billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863383.jpg",
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
        entryUrl: "https://web.minut.com/account/settings_billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MinutCollector.CONFIG);
    }
}
