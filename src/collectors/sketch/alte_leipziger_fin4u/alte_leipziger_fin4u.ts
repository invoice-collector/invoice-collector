
import { SketchCollector } from '../../sketchCollector';

export class AlteLeipzigerFin4uCollector extends SketchCollector {

    static CONFIG = {
        id: "alte_leipziger_fin4u",
        name: "Alte Leipziger - fin4u",
        description: "i18n.collectors.alte_leipziger_fin4u.description",
        version: "0",
        website: "https://app.fin4u.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385673.jpg",
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
        entryUrl: "https://app.fin4u.de/login",
    }

    constructor() {
        super(AlteLeipzigerFin4uCollector.CONFIG);
    }
}
