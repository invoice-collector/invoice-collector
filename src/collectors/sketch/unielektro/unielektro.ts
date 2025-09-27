
import { SketchCollector } from '../../sketchCollector';

export class UnielektroCollector extends SketchCollector {

    static CONFIG = {
        id: "unielektro",
        name: "UniElektro",
        description: "i18n.collectors.unielektro.description",
        version: "0",
        website: "https://webshop.unielektro.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52184.jpg",
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
        entryUrl: "https://webshop.unielektro.de/",
    }

    constructor() {
        super(UnielektroCollector.CONFIG);
    }
}
