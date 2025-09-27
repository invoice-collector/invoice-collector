
import { SketchCollector } from '../../sketchCollector';

export class HobbyAndFreizeitPartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "hobby_and_freizeit_partnerprogramm",
        name: "Hobby & Freizeit | Partnerprogramm",
        description: "i18n.collectors.hobby_and_freizeit_partnerprogramm.description",
        version: "0",
        website: "https://partner.hobby-freizeit.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797690.jpg",
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
        entryUrl: "https://partner.hobby-freizeit.de/",
    }

    constructor() {
        super(HobbyAndFreizeitPartnerprogrammCollector.CONFIG);
    }
}
