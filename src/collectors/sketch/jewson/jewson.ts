
import { SketchCollector } from '../../sketchCollector';

export class JewsonCollector extends SketchCollector {

    static CONFIG = {
        id: "jewson",
        name: "Jewson",
        description: "i18n.collectors.jewson.description",
        version: "0",
        website: "https://www.jewson.co.uk/accounts/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189969.jpg",
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
        entryUrl: "https://www.jewson.co.uk/accounts/",
    }

    constructor() {
        super(JewsonCollector.CONFIG);
    }
}
