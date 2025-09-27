
import { SketchCollector } from '../../sketchCollector';

export class TMobileAtPrivatCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_at_privat",
        name: "T-Mobile.at - Privat",
        description: "i18n.collectors.t_mobile_at_privat.description",
        version: "0",
        website: "https://www.t-mobile.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62531.jpg",
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
        entryUrl: "https://www.t-mobile.at/",
    }

    constructor() {
        super(TMobileAtPrivatCollector.CONFIG);
    }
}
