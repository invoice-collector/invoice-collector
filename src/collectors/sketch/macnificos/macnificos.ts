
import { SketchCollector } from '../../sketchCollector';

export class MacnificosCollector extends SketchCollector {

    static CONFIG = {
        id: "macnificos",
        name: "Macnificos",
        description: "i18n.collectors.macnificos.description",
        version: "0",
        website: "https://www.macnificos.com/cuenta/mis-pedidos",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2010913.jpg",
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
        entryUrl: "https://www.macnificos.com/cuenta/mis-pedidos",
    }

    constructor() {
        super(MacnificosCollector.CONFIG);
    }
}
