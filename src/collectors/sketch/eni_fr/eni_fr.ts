
import { SketchCollector } from '../../sketchCollector';

export class EniFrCollector extends SketchCollector {

    static CONFIG = {
        id: "eni_fr",
        name: "eni.fr",
        description: "i18n.collectors.eni_fr.description",
        version: "0",
        website: "https://www.editions-eni.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27347.jpg",
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
        entryUrl: "https://www.editions-eni.fr/",
    }

    constructor() {
        super(EniFrCollector.CONFIG);
    }
}
