
import { SketchCollector } from '../../sketchCollector';

export class ThreeCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "three_co_uk",
        name: "three.co.uk",
        description: "i18n.collectors.three_co_uk.description",
        version: "0",
        website: "https://www.three.co.uk/My3Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9430.jpg",
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
        entryUrl: "https://www.three.co.uk/My3Account/Login",
    }

    constructor() {
        super(ThreeCoUkCollector.CONFIG);
    }
}
