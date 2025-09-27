
import { SketchCollector } from '../../sketchCollector';

export class AnaptisCollector extends SketchCollector {

    static CONFIG = {
        id: "anaptis",
        name: "anaptis",
        description: "i18n.collectors.anaptis.description",
        version: "0",
        website: "https://www.anaptis.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/550.jpg",
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
        entryUrl: "https://www.anaptis.com/",
    }

    constructor() {
        super(AnaptisCollector.CONFIG);
    }
}
