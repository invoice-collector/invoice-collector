
import { SketchCollector } from '../../sketchCollector';

export class DavengoCollector extends SketchCollector {

    static CONFIG = {
        id: "davengo",
        name: "davengo",
        description: "i18n.collectors.davengo.description",
        version: "0",
        website: "https://www.davengo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108441.jpg",
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
        entryUrl: "https://www.davengo.com/login",
    }

    constructor() {
        super(DavengoCollector.CONFIG);
    }
}
