
import { SketchCollector } from '../../sketchCollector';

export class AllegorithmicCollector extends SketchCollector {

    static CONFIG = {
        id: "allegorithmic",
        name: "allegorithmic",
        description: "i18n.collectors.allegorithmic.description",
        version: "0",
        website: "https://www.allegorithmic.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40866.jpg",
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
        entryUrl: "https://www.allegorithmic.com/user/login",
    }

    constructor() {
        super(AllegorithmicCollector.CONFIG);
    }
}
