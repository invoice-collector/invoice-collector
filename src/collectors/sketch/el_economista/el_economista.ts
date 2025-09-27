
import { SketchCollector } from '../../sketchCollector';

export class ElEconomistaCollector extends SketchCollector {

    static CONFIG = {
        id: "el_economista",
        name: "EL ECONOMISTA",
        description: "i18n.collectors.el_economista.description",
        version: "0",
        website: "https://www.eleconomista.es/premium/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4446712.jpg",
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
        entryUrl: "https://www.eleconomista.es/premium/",
    }

    constructor() {
        super(ElEconomistaCollector.CONFIG);
    }
}
