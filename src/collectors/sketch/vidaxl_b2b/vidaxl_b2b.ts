
import { SketchCollector } from '../../sketchCollector';

export class VidaxlB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "vidaxl_b2b",
        name: "VidaXL (B2B)",
        description: "i18n.collectors.vidaxl_b2b.description",
        version: "0",
        website: "https://b2b.vidaxl.com/profile/customers/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778226.jpg",
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
        entryUrl: "https://b2b.vidaxl.com/profile/customers/sign_in",
    }

    constructor() {
        super(VidaxlB2bCollector.CONFIG);
    }
}
