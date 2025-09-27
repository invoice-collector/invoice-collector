
import { SketchCollector } from '../../sketchCollector';

export class MutuelleLaMedicaleCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_la_medicale",
        name: "Mutuelle La Medicale",
        description: "i18n.collectors.mutuelle_la_medicale.description",
        version: "0",
        website: "https://lamedicale.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129547.jpg",
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
        entryUrl: "https://lamedicale.fr/",
    }

    constructor() {
        super(MutuelleLaMedicaleCollector.CONFIG);
    }
}
