
import { SketchCollector } from '../../sketchCollector';

export class PackagecloudCollector extends SketchCollector {

    static CONFIG = {
        id: "packagecloud",
        name: "packagecloud",
        description: "i18n.collectors.packagecloud.description",
        version: "0",
        website: "https://packagecloud.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25203.jpg",
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
        entryUrl: "https://packagecloud.io/",
    }

    constructor() {
        super(PackagecloudCollector.CONFIG);
    }
}
