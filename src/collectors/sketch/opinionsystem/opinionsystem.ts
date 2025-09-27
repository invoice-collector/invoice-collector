
import { SketchCollector } from '../../sketchCollector';

export class OpinionsystemCollector extends SketchCollector {

    static CONFIG = {
        id: "opinionsystem",
        name: "opinionsystem",
        description: "i18n.collectors.opinionsystem.description",
        version: "0",
        website: "https://www.opinionsystem.fr/fr-fr/?lang=fr-FR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155186.jpg",
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
        entryUrl: "https://www.opinionsystem.fr/fr-fr/?lang=fr-FR",
    }

    constructor() {
        super(OpinionsystemCollector.CONFIG);
    }
}
