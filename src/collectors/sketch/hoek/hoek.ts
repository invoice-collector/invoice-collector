
import { SketchCollector } from '../../sketchCollector';

export class HoekCollector extends SketchCollector {

    static CONFIG = {
        id: "hoek",
        name: "Hoek",
        description: "i18n.collectors.hoek.description",
        version: "0",
        website: "https://www.hoekflowers.com/fr-fr/Service/Factuur",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534369.jpg",
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
        entryUrl: "https://www.hoekflowers.com/fr-fr/Service/Factuur",
    }

    constructor() {
        super(HoekCollector.CONFIG);
    }
}
