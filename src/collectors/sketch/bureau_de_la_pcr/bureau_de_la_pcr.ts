
import { SketchCollector } from '../../sketchCollector';

export class BureauDeLaPcrCollector extends SketchCollector {

    static CONFIG = {
        id: "bureau_de_la_pcr",
        name: "Bureau de la PCR",
        description: "i18n.collectors.bureau_de_la_pcr.description",
        version: "0",
        website: "https://clients.bureaupcr.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396316.jpg",
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
        entryUrl: "https://clients.bureaupcr.fr/login",
    }

    constructor() {
        super(BureauDeLaPcrCollector.CONFIG);
    }
}
