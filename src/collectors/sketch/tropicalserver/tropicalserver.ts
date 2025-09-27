
import { SketchCollector } from '../../sketchCollector';

export class TropicalserverCollector extends SketchCollector {

    static CONFIG = {
        id: "tropicalserver",
        name: "TROPICALSERVER",
        description: "i18n.collectors.tropicalserver.description",
        version: "0",
        website: "https://clientes.tropicalserver.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/799474.jpg",
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
        entryUrl: "https://clientes.tropicalserver.com/login",
    }

    constructor() {
        super(TropicalserverCollector.CONFIG);
    }
}
