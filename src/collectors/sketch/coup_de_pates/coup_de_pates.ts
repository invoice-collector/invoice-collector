
import { SketchCollector } from '../../sketchCollector';

export class CoupDePatesCollector extends SketchCollector {

    static CONFIG = {
        id: "coup_de_pates",
        name: "Coup de Pates",
        description: "i18n.collectors.coup_de_pates.description",
        version: "0",
        website: "https://shop.coupdepates.fr/my-account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564047.jpg",
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
        entryUrl: "https://shop.coupdepates.fr/my-account/orders",
    }

    constructor() {
        super(CoupDePatesCollector.CONFIG);
    }
}
