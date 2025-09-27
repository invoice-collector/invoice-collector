
import { SketchCollector } from '../../sketchCollector';

export class DpdWebPaketCollector extends SketchCollector {

    static CONFIG = {
        id: "dpd_web_paket",
        name: "DPD Web Paket",
        description: "i18n.collectors.dpd_web_paket.description",
        version: "0",
        website: "https://www.paketnavigator.de/register/myLogin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16748.jpg",
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
        entryUrl: "https://www.paketnavigator.de/register/myLogin.aspx",
    }

    constructor() {
        super(DpdWebPaketCollector.CONFIG);
    }
}
