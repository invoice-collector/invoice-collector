
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmartsuppCollector extends SketchCollector {

    static CONFIG = {
        id: "smartsupp",
        name: "Smartsupp",
        description: "i18n.collectors.smartsupp.description",
        version: "0",
        website: "https://app.smartsupp.com/app/sign/in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1652495.jpg",
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
        entryUrl: "https://app.smartsupp.com/app/sign/in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartsuppCollector.CONFIG);
    }
}
