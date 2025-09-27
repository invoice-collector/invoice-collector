
import { SketchCollector } from '../../sketchCollector';

export class TelefonicaEmpresasCollector extends SketchCollector {

    static CONFIG = {
        id: "telefonica_empresas",
        name: "Telefonica Empresas",
        description: "i18n.collectors.telefonica_empresas.description",
        version: "0",
        website: "https://paut.telefonica.es/facturas",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200642.jpg",
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
        entryUrl: "https://paut.telefonica.es/facturas",
    }

    constructor() {
        super(TelefonicaEmpresasCollector.CONFIG);
    }
}
