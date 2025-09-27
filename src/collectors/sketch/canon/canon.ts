
import { SketchCollector } from '../../sketchCollector';

export class CanonCollector extends SketchCollector {

    static CONFIG = {
        id: "canon",
        name: "Canon",
        description: "i18n.collectors.canon.description",
        version: "0",
        website: "https://myid.canon/canonid/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65489.jpg",
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
        entryUrl: "https://myid.canon/canonid/#/login",
    }

    constructor() {
        super(CanonCollector.CONFIG);
    }
}
