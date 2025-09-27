
import { SketchCollector } from '../../sketchCollector';

export class CergyVisCollector extends SketchCollector {

    static CONFIG = {
        id: "cergy_vis",
        name: "Cergy vis",
        description: "i18n.collectors.cergy_vis.description",
        version: "0",
        website: "https://www.cergy-vis.fr/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429269.jpg",
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
        entryUrl: "https://www.cergy-vis.fr/customer/account/login/",
    }

    constructor() {
        super(CergyVisCollector.CONFIG);
    }
}
