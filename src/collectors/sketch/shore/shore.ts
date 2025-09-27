
import { SketchCollector } from '../../sketchCollector';

export class ShoreCollector extends SketchCollector {

    static CONFIG = {
        id: "shore",
        name: "Shore",
        description: "i18n.collectors.shore.description",
        version: "0",
        website: "https://secure.shore.com/merchant/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35287.jpg",
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
        entryUrl: "https://secure.shore.com/merchant/sign_in",
    }

    constructor() {
        super(ShoreCollector.CONFIG);
    }
}
