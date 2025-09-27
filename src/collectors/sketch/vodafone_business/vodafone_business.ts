
import { SketchCollector } from '../../sketchCollector';

export class VodafoneBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_business",
        name: "Vodafone Business",
        description: "i18n.collectors.vodafone_business.description",
        version: "0",
        website: "https://www.vodafone.de/business/services/firmenkundenportal/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/505994.jpg",
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
        entryUrl: "https://www.vodafone.de/business/services/firmenkundenportal/login.html",
    }

    constructor() {
        super(VodafoneBusinessCollector.CONFIG);
    }
}
