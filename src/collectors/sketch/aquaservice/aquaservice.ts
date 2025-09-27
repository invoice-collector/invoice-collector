
import { SketchCollector } from '../../sketchCollector';

export class AquaserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "aquaservice",
        name: "Aquaservice",
        description: "i18n.collectors.aquaservice.description",
        version: "0",
        website: "https://clientes.aquaservice.com/facturas",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484484.jpg",
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
        entryUrl: "https://clientes.aquaservice.com/facturas",
    }

    constructor() {
        super(AquaserviceCollector.CONFIG);
    }
}
