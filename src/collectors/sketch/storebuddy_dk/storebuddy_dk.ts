
import { SketchCollector } from '../../sketchCollector';

export class StorebuddyDkCollector extends SketchCollector {

    static CONFIG = {
        id: "storebuddy_dk",
        name: "storebuddy.dk",
        description: "i18n.collectors.storebuddy_dk.description",
        version: "0",
        website: "https://app.storebuddy.dk/konto/fakturarer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124625.jpg",
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
        entryUrl: "https://app.storebuddy.dk/konto/fakturarer",
    }

    constructor() {
        super(StorebuddyDkCollector.CONFIG);
    }
}
