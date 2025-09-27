
import { SketchCollector } from '../../sketchCollector';

export class PlentymarketsCollector extends SketchCollector {

    static CONFIG = {
        id: "plentymarkets",
        name: "plentymarkets",
        description: "i18n.collectors.plentymarkets.description",
        version: "0",
        website: "https://www.plentymarkets.eu/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7514.jpg",
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
        entryUrl: "https://www.plentymarkets.eu/my-account/",
    }

    constructor() {
        super(PlentymarketsCollector.CONFIG);
    }
}
