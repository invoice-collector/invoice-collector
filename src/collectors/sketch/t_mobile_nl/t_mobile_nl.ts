
import { SketchCollector } from '../../sketchCollector';

export class TMobileNlCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_nl",
        name: "T-Mobile.nl",
        description: "i18n.collectors.t_mobile_nl.description",
        version: "0",
        website: "https://www.t-mobile.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9557.jpg",
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
        entryUrl: "https://www.t-mobile.nl/login",
    }

    constructor() {
        super(TMobileNlCollector.CONFIG);
    }
}
