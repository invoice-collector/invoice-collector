
import { SketchCollector } from '../../sketchCollector';

export class DwsSteuerberaterMedienGmbhVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "dws_steuerberater_medien_gmbh_verlag",
        name: "DWS Steuerberater Medien GmbH Verlag",
        description: "i18n.collectors.dws_steuerberater_medien_gmbh_verlag.description",
        version: "0",
        website: "https://www.dws-verlag.de/customer/account/index/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185312.jpg",
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
        entryUrl: "https://www.dws-verlag.de/customer/account/index/",
    }

    constructor() {
        super(DwsSteuerberaterMedienGmbhVerlagCollector.CONFIG);
    }
}
