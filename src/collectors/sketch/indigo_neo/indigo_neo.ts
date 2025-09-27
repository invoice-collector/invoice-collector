
import { SketchCollector } from '../../sketchCollector';

export class IndigoNeoCollector extends SketchCollector {

    static CONFIG = {
        id: "indigo_neo",
        name: "Indigo NEO",
        description: "i18n.collectors.indigo_neo.description",
        version: "0",
        website: "https://www.indigoneo.fr/fr/account/informations",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732072.jpg",
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
        entryUrl: "https://www.indigoneo.fr/fr/account/informations",
    }

    constructor() {
        super(IndigoNeoCollector.CONFIG);
    }
}
