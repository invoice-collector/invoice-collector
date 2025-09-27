
import { SketchCollector } from '../../sketchCollector';

export class DracoonCollector extends SketchCollector {

    static CONFIG = {
        id: "dracoon",
        name: "dracoon",
        description: "i18n.collectors.dracoon.description",
        version: "0",
        website: "https://www.dracoon.com/de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/662539.jpg",
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
        entryUrl: "https://www.dracoon.com/de/home",
    }

    constructor() {
        super(DracoonCollector.CONFIG);
    }
}
