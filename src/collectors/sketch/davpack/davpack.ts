
import { SketchCollector } from '../../sketchCollector';

export class DavpackCollector extends SketchCollector {

    static CONFIG = {
        id: "davpack",
        name: "davpack",
        description: "i18n.collectors.davpack.description",
        version: "0",
        website: "https://www.davpack.de/SignIn.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178471.jpg",
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
        entryUrl: "https://www.davpack.de/SignIn.aspx",
    }

    constructor() {
        super(DavpackCollector.CONFIG);
    }
}
