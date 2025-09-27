
import { SketchCollector } from '../../sketchCollector';

export class HomedepotComProCollector extends SketchCollector {

    static CONFIG = {
        id: "homedepot_com_pro",
        name: "HomeDepot.com PRO",
        description: "i18n.collectors.homedepot_com_pro.description",
        version: "0",
        website: "https://www.homedepot.com/c/professional_contractor",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811285.jpg",
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
        entryUrl: "https://www.homedepot.com/c/professional_contractor",
    }

    constructor() {
        super(HomedepotComProCollector.CONFIG);
    }
}
