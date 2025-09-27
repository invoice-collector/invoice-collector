
import { SketchCollector } from '../../sketchCollector';

export class PhonestyCollector extends SketchCollector {

    static CONFIG = {
        id: "phonesty",
        name: "Phonesty",
        description: "i18n.collectors.phonesty.description",
        version: "0",
        website: "https://www.phonesty.de/myAccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/176812.jpg",
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
        entryUrl: "https://www.phonesty.de/myAccount",
    }

    constructor() {
        super(PhonestyCollector.CONFIG);
    }
}
