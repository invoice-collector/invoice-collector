
import { SketchCollector } from '../../sketchCollector';

export class ReveoCollector extends SketchCollector {

    static CONFIG = {
        id: "reveo",
        name: "Reveo",
        description: "i18n.collectors.reveo.description",
        version: "0",
        website: "https://my.reveocharge.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940375.jpg",
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
        entryUrl: "https://my.reveocharge.com/login",
    }

    constructor() {
        super(ReveoCollector.CONFIG);
    }
}
