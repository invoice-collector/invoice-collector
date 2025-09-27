
import { SketchCollector } from '../../sketchCollector';

export class AvisDeAutovermietungCollector extends SketchCollector {

    static CONFIG = {
        id: "avis_de_autovermietung",
        name: "Avis.de Autovermietung",
        description: "i18n.collectors.avis_de_autovermietung.description",
        version: "0",
        website: "https://www.avis.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1181.jpg",
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
        entryUrl: "https://www.avis.de/",
    }

    constructor() {
        super(AvisDeAutovermietungCollector.CONFIG);
    }
}
