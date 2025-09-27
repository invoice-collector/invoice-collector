
import { SketchCollector } from '../../sketchCollector';

export class CryptolensCollector extends SketchCollector {

    static CONFIG = {
        id: "cryptolens",
        name: "CRYPTOLENS",
        description: "i18n.collectors.cryptolens.description",
        version: "0",
        website: "https://app.cryptolens.io/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811723.jpg",
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
        entryUrl: "https://app.cryptolens.io/Account/Login",
    }

    constructor() {
        super(CryptolensCollector.CONFIG);
    }
}
