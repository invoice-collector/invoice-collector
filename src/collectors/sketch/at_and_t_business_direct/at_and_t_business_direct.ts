
import { SketchCollector } from '../../sketchCollector';

export class AtAndTBusinessDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_business_direct",
        name: "AT&T Business Direct",
        description: "i18n.collectors.at_and_t_business_direct.description",
        version: "0",
        website: "https://www.businessdirect.att.com/portal/index.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8536.jpg",
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
        entryUrl: "https://www.businessdirect.att.com/portal/index.jsp",
    }

    constructor() {
        super(AtAndTBusinessDirectCollector.CONFIG);
    }
}
