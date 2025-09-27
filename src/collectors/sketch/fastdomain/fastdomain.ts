
import { SketchCollector } from '../../sketchCollector';

export class FastdomainCollector extends SketchCollector {

    static CONFIG = {
        id: "fastdomain",
        name: "FastDomain",
        description: "i18n.collectors.fastdomain.description",
        version: "0",
        website: "https://my.fastdomain.com/web-hosting/cplogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9223.jpg",
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
        entryUrl: "https://my.fastdomain.com/web-hosting/cplogin",
    }

    constructor() {
        super(FastdomainCollector.CONFIG);
    }
}
