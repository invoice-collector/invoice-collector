
import { SketchCollector } from '../../sketchCollector';

export class OcadoCollector extends SketchCollector {

    static CONFIG = {
        id: "ocado",
        name: "Ocado",
        description: "i18n.collectors.ocado.description",
        version: "0",
        website: "https://www.ocado.com/webshop/startWebshop.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8759.jpg",
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
        entryUrl: "https://www.ocado.com/webshop/startWebshop.do",
    }

    constructor() {
        super(OcadoCollector.CONFIG);
    }
}
