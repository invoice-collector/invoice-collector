
import { SketchCollector } from '../../sketchCollector';

export class CiteoCollector extends SketchCollector {

    static CONFIG = {
        id: "citeo",
        name: "Citeo",
        description: "i18n.collectors.citeo.description",
        version: "0",
        website: "https://clients.citeo.com/fr/public/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2521279.jpg",
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
        entryUrl: "https://clients.citeo.com/fr/public/login",
    }

    constructor() {
        super(CiteoCollector.CONFIG);
    }
}
