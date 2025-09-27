
import { SketchCollector } from '../../sketchCollector';

export class ConradBizGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "conrad_biz_geschaftskunden",
        name: "Conrad.biz - Geschaftskunden",
        description: "i18n.collectors.conrad_biz_geschaftskunden.description",
        version: "0",
        website: "https://www.conrad.biz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432.jpg",
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
        entryUrl: "https://www.conrad.biz",
    }

    constructor() {
        super(ConradBizGeschaftskundenCollector.CONFIG);
    }
}
