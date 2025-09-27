
import { SketchCollector } from '../../sketchCollector';

export class SharefileCollector extends SketchCollector {

    static CONFIG = {
        id: "sharefile",
        name: "ShareFile",
        description: "i18n.collectors.sharefile.description",
        version: "0",
        website: "https://secure.sharefile.com/Authentication/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6483.jpg",
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
        entryUrl: "https://secure.sharefile.com/Authentication/Login",
    }

    constructor() {
        super(SharefileCollector.CONFIG);
    }
}
