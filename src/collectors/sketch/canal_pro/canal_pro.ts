
import { SketchCollector } from '../../sketchCollector';

export class CanalProCollector extends SketchCollector {

    static CONFIG = {
        id: "canal_pro",
        name: "Canal+ Pro",
        description: "i18n.collectors.canal_pro.description",
        version: "0",
        website: "https://client.canalpro.fr/espaceclient/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/553313.jpg",
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
        entryUrl: "https://client.canalpro.fr/espaceclient/factures",
    }

    constructor() {
        super(CanalProCollector.CONFIG);
    }
}
