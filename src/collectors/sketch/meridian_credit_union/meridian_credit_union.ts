
import { SketchCollector } from '../../sketchCollector';

export class MeridianCreditUnionCollector extends SketchCollector {

    static CONFIG = {
        id: "meridian_credit_union",
        name: "Meridian Credit Union",
        description: "i18n.collectors.meridian_credit_union.description",
        version: "0",
        website: "https://www.meridiancu.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74885.jpg",
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
        entryUrl: "https://www.meridiancu.ca",
    }

    constructor() {
        super(MeridianCreditUnionCollector.CONFIG);
    }
}
