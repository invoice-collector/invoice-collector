
import { SketchCollector } from '../../sketchCollector';

export class VeoliaEauCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_eau",
        name: "Veolia Eau",
        description: "i18n.collectors.veolia_eau.description",
        version: "0",
        website: "http://www.service-client.veoliaeau.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26983.jpg",
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
        entryUrl: "http://www.service-client.veoliaeau.fr",
    }

    constructor() {
        super(VeoliaEauCollector.CONFIG);
    }
}
