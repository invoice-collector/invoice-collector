
import { SketchCollector } from '../../sketchCollector';

export class KeysearchCollector extends SketchCollector {

    static CONFIG = {
        id: "keysearch",
        name: "Keysearch",
        description: "i18n.collectors.keysearch.description",
        version: "0",
        website: "https://www.keysearch.co/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284729.jpg",
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
        entryUrl: "https://www.keysearch.co/user/invoices",
    }

    constructor() {
        super(KeysearchCollector.CONFIG);
    }
}
