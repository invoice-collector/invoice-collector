
import { SketchCollector } from '../../sketchCollector';

export class ArsysCollector extends SketchCollector {

    static CONFIG = {
        id: "arsys",
        name: "arsys",
        description: "i18n.collectors.arsys.description",
        version: "0",
        website: "https://www.arsys.es/clientes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9016.jpg",
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
        entryUrl: "https://www.arsys.es/clientes",
    }

    constructor() {
        super(ArsysCollector.CONFIG);
    }
}
