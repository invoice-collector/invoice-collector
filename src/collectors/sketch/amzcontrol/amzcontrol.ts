
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmzcontrolCollector extends SketchCollector {

    static CONFIG = {
        id: "amzcontrol",
        name: "amzcontrol",
        description: "i18n.collectors.amzcontrol.description",
        version: "0",
        website: "https://dashboard.amzcontrol.com/en/auth/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45193.jpg",
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
        entryUrl: "https://dashboard.amzcontrol.com/en/auth/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmzcontrolCollector.CONFIG);
    }
}
