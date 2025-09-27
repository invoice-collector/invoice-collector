
import { SketchCollector } from '../../sketchCollector';

export class AchievaCreditUnionCollector extends SketchCollector {

    static CONFIG = {
        id: "achieva_credit_union",
        name: "Achieva Credit Union",
        description: "i18n.collectors.achieva_credit_union.description",
        version: "0",
        website: "https://banking.achievacu.com/eDocs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519914.jpg",
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
        entryUrl: "https://banking.achievacu.com/eDocs",
    }

    constructor() {
        super(AchievaCreditUnionCollector.CONFIG);
    }
}
