
import { SketchCollector } from '../../sketchCollector';

export class KdpchampCollector extends SketchCollector {

    static CONFIG = {
        id: "kdpchamp",
        name: "KDPChamp",
        description: "i18n.collectors.kdpchamp.description",
        version: "0",
        website: "https://www.kdpchamp.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2740969.jpg",
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
        entryUrl: "https://www.kdpchamp.com/login/",
    }

    constructor() {
        super(KdpchampCollector.CONFIG);
    }
}
