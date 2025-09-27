
import { SketchCollector } from '../../sketchCollector';

export class O2CoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "o2_co_uk",
        name: "o2.co.uk",
        description: "i18n.collectors.o2_co_uk.description",
        version: "0",
        website: "https://accounts.o2.co.uk/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9427.jpg",
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
        entryUrl: "https://accounts.o2.co.uk/signin",
    }

    constructor() {
        super(O2CoUkCollector.CONFIG);
    }
}
