
import { SketchCollector } from '../../sketchCollector';

export class PacklinkProFrCollector extends SketchCollector {

    static CONFIG = {
        id: "packlink_pro_fr",
        name: "Packlink PRO FR",
        description: "i18n.collectors.packlink_pro_fr.description",
        version: "0",
        website: "https://auth.packlink.com/fr-FR/pro/login?platform=PRO&platform_country=FR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778165.jpg",
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
        entryUrl: "https://auth.packlink.com/fr-FR/pro/login?platform=PRO&platform_country=FR",
    }

    constructor() {
        super(PacklinkProFrCollector.CONFIG);
    }
}
