
import { SketchCollector } from '../../sketchCollector';

export class OnoffCollector extends SketchCollector {

    static CONFIG = {
        id: "onoff",
        name: "OnOff",
        description: "i18n.collectors.onoff.description",
        version: "0",
        website: "https://web.onoffbusiness.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779739.jpg",
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
        entryUrl: "https://web.onoffbusiness.com/settings/billing",
    }

    constructor() {
        super(OnoffCollector.CONFIG);
    }
}
