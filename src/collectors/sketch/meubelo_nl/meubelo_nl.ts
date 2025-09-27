
import { SketchCollector } from '../../sketchCollector';

export class MeubeloNlCollector extends SketchCollector {

    static CONFIG = {
        id: "meubelo_nl",
        name: "meubelo.nl",
        description: "i18n.collectors.meubelo_nl.description",
        version: "0",
        website: "https://partner.meubelo.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819972.jpg",
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
        entryUrl: "https://partner.meubelo.nl/",
    }

    constructor() {
        super(MeubeloNlCollector.CONFIG);
    }
}
