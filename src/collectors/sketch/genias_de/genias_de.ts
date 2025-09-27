
import { SketchCollector } from '../../sketchCollector';

export class GeniasDeCollector extends SketchCollector {

    static CONFIG = {
        id: "genias_de",
        name: "Genias.de",
        description: "i18n.collectors.genias_de.description",
        version: "0",
        website: "http://www.genias.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9419.jpg",
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
        entryUrl: "http://www.genias.net",
    }

    constructor() {
        super(GeniasDeCollector.CONFIG);
    }
}
