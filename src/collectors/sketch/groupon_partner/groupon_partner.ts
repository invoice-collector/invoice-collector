
import { SketchCollector } from '../../sketchCollector';

export class GrouponPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "groupon_partner",
        name: "Groupon-Partner",
        description: "i18n.collectors.groupon_partner.description",
        version: "0",
        website: "https://www.groupon.com/merchant/center/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194683.jpg",
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
        entryUrl: "https://www.groupon.com/merchant/center/login",
    }

    constructor() {
        super(GrouponPartnerCollector.CONFIG);
    }
}
