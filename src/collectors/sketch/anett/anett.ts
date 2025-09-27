
import { SketchCollector } from '../../sketchCollector';

export class AnettCollector extends SketchCollector {

    static CONFIG = {
        id: "anett",
        name: "Anett",
        description: "i18n.collectors.anett.description",
        version: "0",
        website: "https://espaceclient.anett.fr/escli/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4182186.jpg",
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
        entryUrl: "https://espaceclient.anett.fr/escli/billing",
    }

    constructor() {
        super(AnettCollector.CONFIG);
    }
}
