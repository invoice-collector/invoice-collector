
import { SketchCollector } from '../../sketchCollector';

export class EnercoopCollector extends SketchCollector {

    static CONFIG = {
        id: "enercoop",
        name: "Enercoop",
        description: "i18n.collectors.enercoop.description",
        version: "0",
        website: "https://espace-client.enercoop.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532724.jpg",
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
        entryUrl: "https://espace-client.enercoop.fr/",
    }

    constructor() {
        super(EnercoopCollector.CONFIG);
    }
}
