
import { SketchCollector } from '../../sketchCollector';

export class PassionfroidCollector extends SketchCollector {

    static CONFIG = {
        id: "passionfroid",
        name: "PassionFroid",
        description: "i18n.collectors.passionfroid.description",
        version: "0",
        website: "https://www.passionfroid.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778927.jpg",
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
        entryUrl: "https://www.passionfroid.fr/",
    }

    constructor() {
        super(PassionfroidCollector.CONFIG);
    }
}
