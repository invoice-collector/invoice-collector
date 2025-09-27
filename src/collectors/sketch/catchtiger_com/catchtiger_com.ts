
import { SketchCollector } from '../../sketchCollector';

export class CatchtigerComCollector extends SketchCollector {

    static CONFIG = {
        id: "catchtiger_com",
        name: "Catchtiger.com",
        description: "i18n.collectors.catchtiger_com.description",
        version: "0",
        website: "https://www.catchtiger.com/en/inloggen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52868.jpg",
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
        entryUrl: "https://www.catchtiger.com/en/inloggen/",
    }

    constructor() {
        super(CatchtigerComCollector.CONFIG);
    }
}
