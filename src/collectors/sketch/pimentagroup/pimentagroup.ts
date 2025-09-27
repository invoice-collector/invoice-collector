
import { SketchCollector } from '../../sketchCollector';

export class PimentagroupCollector extends SketchCollector {

    static CONFIG = {
        id: "pimentagroup",
        name: "pimentaGROUP",
        description: "i18n.collectors.pimentagroup.description",
        version: "0",
        website: "http://www.pimentagroup.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10310.jpg",
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
        entryUrl: "http://www.pimentagroup.de",
    }

    constructor() {
        super(PimentagroupCollector.CONFIG);
    }
}
