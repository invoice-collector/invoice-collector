
import { SketchCollector } from '../../sketchCollector';

export class DexxonGroupeCollector extends SketchCollector {

    static CONFIG = {
        id: "dexxon_groupe",
        name: "dexxon groupe",
        description: "i18n.collectors.dexxon_groupe.description",
        version: "0",
        website: "https://plus.dexxon.eu/index.php/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/794904.jpg",
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
        entryUrl: "https://plus.dexxon.eu/index.php/fr/",
    }

    constructor() {
        super(DexxonGroupeCollector.CONFIG);
    }
}
