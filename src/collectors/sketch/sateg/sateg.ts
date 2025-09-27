
import { SketchCollector } from '../../sketchCollector';

export class SategCollector extends SketchCollector {

    static CONFIG = {
        id: "sateg",
        name: "SATEG",
        description: "i18n.collectors.sateg.description",
        version: "0",
        website: "https://mon-espace.sateg-eau.com/fr/mes-paiements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367417.jpg",
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
        entryUrl: "https://mon-espace.sateg-eau.com/fr/mes-paiements",
    }

    constructor() {
        super(SategCollector.CONFIG);
    }
}
