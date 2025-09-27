
import { SketchCollector } from '../../sketchCollector';

export class PlusSimpleCollector extends SketchCollector {

    static CONFIG = {
        id: "plus_simple",
        name: "Plus simple",
        description: "i18n.collectors.plus_simple.description",
        version: "0",
        website: "https://app.plussimple.fr/client/espace/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862879.jpg",
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
        entryUrl: "https://app.plussimple.fr/client/espace/factures",
    }

    constructor() {
        super(PlusSimpleCollector.CONFIG);
    }
}
