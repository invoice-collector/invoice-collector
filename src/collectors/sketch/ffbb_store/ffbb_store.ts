
import { SketchCollector } from '../../sketchCollector';

export class FfbbStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "ffbb_store",
        name: "FFBB Store",
        description: "i18n.collectors.ffbb_store.description",
        version: "0",
        website: "http://www.ffbbstore.com/index.php?controller=authentication&back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119143.jpg",
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
        entryUrl: "http://www.ffbbstore.com/index.php?controller=authentication&back=my-account",
    }

    constructor() {
        super(FfbbStoreCollector.CONFIG);
    }
}
