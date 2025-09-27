
import { SketchCollector } from '../../sketchCollector';

export class VeligoCollector extends SketchCollector {

    static CONFIG = {
        id: "veligo",
        name: "Veligo",
        description: "i18n.collectors.veligo.description",
        version: "0",
        website: "https://mon-espace.veligo-location.fr/home/offer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746768.jpg",
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
        entryUrl: "https://mon-espace.veligo-location.fr/home/offer",
    }

    constructor() {
        super(VeligoCollector.CONFIG);
    }
}
