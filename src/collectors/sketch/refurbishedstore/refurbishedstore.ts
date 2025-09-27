
import { SketchCollector } from '../../sketchCollector';

export class RefurbishedstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "refurbishedstore",
        name: "Refurbishedstore",
        description: "i18n.collectors.refurbishedstore.description",
        version: "0",
        website: "https://www.refurbished.store/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061766.jpg",
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
        entryUrl: "https://www.refurbished.store/login",
    }

    constructor() {
        super(RefurbishedstoreCollector.CONFIG);
    }
}
