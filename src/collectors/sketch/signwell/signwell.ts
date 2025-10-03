
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SignwellCollector extends SketchCollector {

    static CONFIG = {
        id: "signwell",
        name: "Signwell",
        description: "i18n.collectors.signwell.description",
        version: "0",
        website: "https://www.signwell.com/app/settings/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1304435.jpg",
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
        entryUrl: "https://www.signwell.com/app/settings/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SignwellCollector.CONFIG);
    }
}
