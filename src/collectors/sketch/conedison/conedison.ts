
import { SketchCollector } from '../../sketchCollector';

export class ConedisonCollector extends SketchCollector {

    static CONFIG = {
        id: "conedison",
        name: "conEdison",
        description: "i18n.collectors.conedison.description",
        version: "0",
        website: "https://www.coned.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8809.jpg",
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
        entryUrl: "https://www.coned.com/en/login",
    }

    constructor() {
        super(ConedisonCollector.CONFIG);
    }
}
