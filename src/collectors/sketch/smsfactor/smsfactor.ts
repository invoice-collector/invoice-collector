
import { SketchCollector } from '../../sketchCollector';

export class SmsfactorCollector extends SketchCollector {

    static CONFIG = {
        id: "smsfactor",
        name: "SMSFactor",
        description: "i18n.collectors.smsfactor.description",
        version: "0",
        website: "https://beta.smsfactor.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445729.jpg",
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
        entryUrl: "https://beta.smsfactor.com/account/billing",
    }

    constructor() {
        super(SmsfactorCollector.CONFIG);
    }
}
