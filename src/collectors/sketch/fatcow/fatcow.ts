
import { SketchCollector } from '../../sketchCollector';

export class FatcowCollector extends SketchCollector {

    static CONFIG = {
        id: "fatcow",
        name: "FatCow",
        description: "i18n.collectors.fatcow.description",
        version: "0",
        website: "https://secure.fatcow.com/secure/login.bml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8950.jpg",
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
        entryUrl: "https://secure.fatcow.com/secure/login.bml",
    }

    constructor() {
        super(FatcowCollector.CONFIG);
    }
}
