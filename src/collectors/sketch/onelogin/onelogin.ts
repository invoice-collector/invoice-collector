
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OneloginCollector extends SketchCollector {

    static CONFIG = {
        id: "onelogin",
        name: "onelogin",
        description: "i18n.collectors.onelogin.description",
        version: "0",
        website: "https://app.onelogin.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7127.jpg",
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
        entryUrl: "https://app.onelogin.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneloginCollector.CONFIG);
    }
}
