
import { SketchCollector } from '../../sketchCollector';

export class HillwoodCollector extends SketchCollector {

    static CONFIG = {
        id: "hillwood",
        name: "Hillwood",
        description: "i18n.collectors.hillwood.description",
        version: "0",
        website: "https://hillwood.secure.munibilling.com/customers/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382659.jpg",
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
        entryUrl: "https://hillwood.secure.munibilling.com/customers/sign_in",
    }

    constructor() {
        super(HillwoodCollector.CONFIG);
    }
}
