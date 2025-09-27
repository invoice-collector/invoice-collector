
import { SketchCollector } from '../../sketchCollector';

export class FibwiCollector extends SketchCollector {

    static CONFIG = {
        id: "fibwi",
        name: "Fibwi",
        description: "i18n.collectors.fibwi.description",
        version: "0",
        website: "https://clientes.fibwi.com/panelClientes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741159.jpg",
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
        entryUrl: "https://clientes.fibwi.com/panelClientes",
    }

    constructor() {
        super(FibwiCollector.CONFIG);
    }
}
