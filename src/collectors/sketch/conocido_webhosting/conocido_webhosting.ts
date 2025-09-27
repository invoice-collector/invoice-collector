
import { SketchCollector } from '../../sketchCollector';

export class ConocidoWebhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "conocido_webhosting",
        name: "Conocido Webhosting",
        description: "i18n.collectors.conocido_webhosting.description",
        version: "0",
        website: "http://www.conocido.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32365.jpg",
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
        entryUrl: "http://www.conocido.nl",
    }

    constructor() {
        super(ConocidoWebhostingCollector.CONFIG);
    }
}
