
import { SketchCollector } from '../../sketchCollector';

export class WecandooArtisanFacturesDeCommissionCollector extends SketchCollector {

    static CONFIG = {
        id: "wecandoo_artisan_factures_de_commission",
        name: "Wecandoo Artisan Factures de commission",
        description: "i18n.collectors.wecandoo_artisan_factures_de_commission.description",
        version: "0",
        website: "https://wecandoo.fr/loginregister",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034232.jpg",
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
        entryUrl: "https://wecandoo.fr/loginregister",
    }

    constructor() {
        super(WecandooArtisanFacturesDeCommissionCollector.CONFIG);
    }
}
