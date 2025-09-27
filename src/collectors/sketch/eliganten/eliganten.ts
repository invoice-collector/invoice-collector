
import { SketchCollector } from '../../sketchCollector';

export class EligantenCollector extends SketchCollector {

    static CONFIG = {
        id: "eliganten",
        name: "ELIGANTEN",
        description: "i18n.collectors.eliganten.description",
        version: "0",
        website: "https://www.elgiganten.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21980.jpg",
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
        entryUrl: "https://www.elgiganten.dk",
    }

    constructor() {
        super(EligantenCollector.CONFIG);
    }
}
