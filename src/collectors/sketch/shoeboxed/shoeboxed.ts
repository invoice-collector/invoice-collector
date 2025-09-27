
import { SketchCollector } from '../../sketchCollector';

export class ShoeboxedCollector extends SketchCollector {

    static CONFIG = {
        id: "shoeboxed",
        name: "Shoeboxed",
        description: "i18n.collectors.shoeboxed.description",
        version: "0",
        website: "https://id.shoeboxed.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15595.jpg",
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
        entryUrl: "https://id.shoeboxed.com/login",
    }

    constructor() {
        super(ShoeboxedCollector.CONFIG);
    }
}
