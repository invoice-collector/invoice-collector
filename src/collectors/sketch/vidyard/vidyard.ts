
import { SketchCollector } from '../../sketchCollector';

export class VidyardCollector extends SketchCollector {

    static CONFIG = {
        id: "vidyard",
        name: "vidyard",
        description: "i18n.collectors.vidyard.description",
        version: "0",
        website: "https://auth.vidyard.com/login?rid=x0blYo1AmZsKRA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832503.jpg",
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
        entryUrl: "https://auth.vidyard.com/login?rid=x0blYo1AmZsKRA",
    }

    constructor() {
        super(VidyardCollector.CONFIG);
    }
}
