
import { SketchCollector } from '../../sketchCollector';

export class StellenwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "stellenwerk",
        name: "Stellenwerk",
        description: "i18n.collectors.stellenwerk.description",
        version: "0",
        website: "https://www.stellenwerk-koeln.de/user/33168/joboffers",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119873.jpg",
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
        entryUrl: "https://www.stellenwerk-koeln.de/user/33168/joboffers",
    }

    constructor() {
        super(StellenwerkCollector.CONFIG);
    }
}
