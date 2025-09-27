
import { SketchCollector } from '../../sketchCollector';

export class TchiboCollector extends SketchCollector {

    static CONFIG = {
        id: "tchibo",
        name: "Tchibo",
        description: "i18n.collectors.tchibo.description",
        version: "0",
        website: "https://www.tchibo.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15294.jpg",
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
        entryUrl: "https://www.tchibo.de/login",
    }

    constructor() {
        super(TchiboCollector.CONFIG);
    }
}
