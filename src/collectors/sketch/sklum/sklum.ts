
import { SketchCollector } from '../../sketchCollector';

export class SklumCollector extends SketchCollector {

    static CONFIG = {
        id: "sklum",
        name: "Sklum",
        description: "i18n.collectors.sklum.description",
        version: "0",
        website: "https://www.sklum.com/fr/historial-de-pedidos",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1895674.jpg",
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
        entryUrl: "https://www.sklum.com/fr/historial-de-pedidos",
    }

    constructor() {
        super(SklumCollector.CONFIG);
    }
}
