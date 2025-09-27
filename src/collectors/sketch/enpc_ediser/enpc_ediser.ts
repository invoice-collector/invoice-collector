
import { SketchCollector } from '../../sketchCollector';

export class EnpcEdiserCollector extends SketchCollector {

    static CONFIG = {
        id: "enpc_ediser",
        name: "ENPC EDISER",
        description: "i18n.collectors.enpc_ediser.description",
        version: "0",
        website: "https://www.enpc-center.fr/mon-compte/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378388.jpg",
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
        entryUrl: "https://www.enpc-center.fr/mon-compte/mes-factures",
    }

    constructor() {
        super(EnpcEdiserCollector.CONFIG);
    }
}
