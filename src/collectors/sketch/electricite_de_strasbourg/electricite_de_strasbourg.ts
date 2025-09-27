
import { SketchCollector } from '../../sketchCollector';

export class ElectriciteDeStrasbourgCollector extends SketchCollector {

    static CONFIG = {
        id: "electricite_de_strasbourg",
        name: "Electricite de Strasbourg",
        description: "i18n.collectors.electricite_de_strasbourg.description",
        version: "0",
        website: "http://www.es.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27349.jpg",
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
        entryUrl: "http://www.es.fr",
    }

    constructor() {
        super(ElectriciteDeStrasbourgCollector.CONFIG);
    }
}
