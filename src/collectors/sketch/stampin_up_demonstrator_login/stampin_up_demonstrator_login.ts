
import { SketchCollector } from '../../sketchCollector';

export class StampinUpDemonstratorLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "stampin_up_demonstrator_login",
        name: "Stampin\' Up! Demonstrator-Login",
        description: "i18n.collectors.stampin_up_demonstrator_login.description",
        version: "0",
        website: "https://my.stampinup.com/portal/de-de/account/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24478.jpg",
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
        entryUrl: "https://my.stampinup.com/portal/de-de/account/sign-in",
    }

    constructor() {
        super(StampinUpDemonstratorLoginCollector.CONFIG);
    }
}
