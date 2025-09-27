
import { SketchCollector } from '../../sketchCollector';

export class OlinCollector extends SketchCollector {

    static CONFIG = {
        id: "olin",
        name: "Olin",
        description: "i18n.collectors.olin.description",
        version: "0",
        website: "https://micuenta.olin.es/login_clientes.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484382.jpg",
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
        entryUrl: "https://micuenta.olin.es/login_clientes.php",
    }

    constructor() {
        super(OlinCollector.CONFIG);
    }
}
