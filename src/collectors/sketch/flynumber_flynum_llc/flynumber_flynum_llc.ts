
import { SketchCollector } from '../../sketchCollector';

export class FlynumberFlynumLlcCollector extends SketchCollector {

    static CONFIG = {
        id: "flynumber_flynum_llc",
        name: "FlyNumber (FlyNum LLC)",
        description: "i18n.collectors.flynumber_flynum_llc.description",
        version: "0",
        website: "http://www.flynumber.com/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144287.jpg",
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
        entryUrl: "http://www.flynumber.com/my-account",
    }

    constructor() {
        super(FlynumberFlynumLlcCollector.CONFIG);
    }
}
