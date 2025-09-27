
import { SketchCollector } from '../../sketchCollector';

export class OptiqueELeclercCollector extends SketchCollector {

    static CONFIG = {
        id: "optique_e_leclerc",
        name: "Optique E.Leclerc",
        description: "i18n.collectors.optique_e_leclerc.description",
        version: "0",
        website: "http://optique.e-leclerc.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122533.jpg",
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
        entryUrl: "http://optique.e-leclerc.com/",
    }

    constructor() {
        super(OptiqueELeclercCollector.CONFIG);
    }
}
