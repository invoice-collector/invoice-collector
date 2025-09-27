
import { SketchCollector } from '../../sketchCollector';

export class DstvSaCollector extends SketchCollector {

    static CONFIG = {
        id: "dstv_sa",
        name: "DSTV SA",
        description: "i18n.collectors.dstv_sa.description",
        version: "0",
        website: "https://www.dstv.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/424267.jpg",
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
        entryUrl: "https://www.dstv.co.za/",
    }

    constructor() {
        super(DstvSaCollector.CONFIG);
    }
}
