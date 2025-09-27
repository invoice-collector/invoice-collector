
import { SketchCollector } from '../../sketchCollector';

export class ColisexpatCollector extends SketchCollector {

    static CONFIG = {
        id: "colisexpat",
        name: "ColisExpat",
        description: "i18n.collectors.colisexpat.description",
        version: "0",
        website: "https://client.colisexpat.com/de/comptes/displayClientFacture/888678/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919997.jpg",
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
        entryUrl: "https://client.colisexpat.com/de/comptes/displayClientFacture/888678/",
    }

    constructor() {
        super(ColisexpatCollector.CONFIG);
    }
}
