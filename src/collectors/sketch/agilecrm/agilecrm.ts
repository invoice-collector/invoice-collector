
import { SketchCollector } from '../../sketchCollector';

export class AgilecrmCollector extends SketchCollector {

    static CONFIG = {
        id: "agilecrm",
        name: "AgileCRM",
        description: "i18n.collectors.agilecrm.description",
        version: "0",
        website: "https://my.agilecrm.com/enter-domain?to=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28118.jpg",
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
        entryUrl: "https://my.agilecrm.com/enter-domain?to=login",
    }

    constructor() {
        super(AgilecrmCollector.CONFIG);
    }
}
