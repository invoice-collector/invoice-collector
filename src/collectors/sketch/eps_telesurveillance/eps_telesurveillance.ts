
import { SketchCollector } from '../../sketchCollector';

export class EpsTelesurveillanceCollector extends SketchCollector {

    static CONFIG = {
        id: "eps_telesurveillance",
        name: "EPS Telesurveillance",
        description: "i18n.collectors.eps_telesurveillance.description",
        version: "0",
        website: "https://www.espaceps.com/fr/client/myAccount.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73030.jpg",
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
        entryUrl: "https://www.espaceps.com/fr/client/myAccount.html",
    }

    constructor() {
        super(EpsTelesurveillanceCollector.CONFIG);
    }
}
