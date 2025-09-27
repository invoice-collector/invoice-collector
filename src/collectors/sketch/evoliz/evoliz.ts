
import { SketchCollector } from '../../sketchCollector';

export class EvolizCollector extends SketchCollector {

    static CONFIG = {
        id: "evoliz",
        name: "Evoliz",
        description: "i18n.collectors.evoliz.description",
        version: "0",
        website: "https://www.evoliz.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778922.jpg",
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
        entryUrl: "https://www.evoliz.com/",
    }

    constructor() {
        super(EvolizCollector.CONFIG);
    }
}
