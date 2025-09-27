
import { SketchCollector } from '../../sketchCollector';

export class AuchanFraisCollector extends SketchCollector {

    static CONFIG = {
        id: "auchan_frais",
        name: "Auchan Frais",
        description: "i18n.collectors.auchan_frais.description",
        version: "0",
        website: "https://frais.auchan.fr/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27501.jpg",
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
        entryUrl: "https://frais.auchan.fr/customer/account/login/",
    }

    constructor() {
        super(AuchanFraisCollector.CONFIG);
    }
}
