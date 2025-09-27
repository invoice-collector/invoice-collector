
import { SketchCollector } from '../../sketchCollector';

export class PacklinkProEsCollector extends SketchCollector {

    static CONFIG = {
        id: "packlink_pro_es",
        name: "Packlink Pro ES",
        description: "i18n.collectors.packlink_pro_es.description",
        version: "0",
        website: "https://auth.packlink.com/es-ES/pro/login?platform=PRO&platform_country=ES",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126184.jpg",
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
        entryUrl: "https://auth.packlink.com/es-ES/pro/login?platform=PRO&platform_country=ES",
    }

    constructor() {
        super(PacklinkProEsCollector.CONFIG);
    }
}
