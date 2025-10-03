
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SherwebCollector extends SketchCollector {

    static CONFIG = {
        id: "sherweb",
        name: "SherWeb",
        description: "i18n.collectors.sherweb.description",
        version: "0",
        website: "https://www.sherweb.com/customer-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72987.jpg",
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
        entryUrl: "https://www.sherweb.com/customer-login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SherwebCollector.CONFIG);
    }
}
