
import { SketchCollector } from '../../sketchCollector';

export class MyTassimoCollector extends SketchCollector {

    static CONFIG = {
        id: "my_tassimo",
        name: "My Tassimo",
        description: "i18n.collectors.my_tassimo.description",
        version: "0",
        website: "https://www.tassimo.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122255.jpg",
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
        entryUrl: "https://www.tassimo.com/fr/",
    }

    constructor() {
        super(MyTassimoCollector.CONFIG);
    }
}
