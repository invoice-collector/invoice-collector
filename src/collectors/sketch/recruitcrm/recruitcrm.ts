
import { SketchCollector } from '../../sketchCollector';

export class RecruitcrmCollector extends SketchCollector {

    static CONFIG = {
        id: "recruitcrm",
        name: "RecruitCRM",
        description: "i18n.collectors.recruitcrm.description",
        version: "0",
        website: "https://app.recruitcrm.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669987.jpg",
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
        entryUrl: "https://app.recruitcrm.io/",
    }

    constructor() {
        super(RecruitcrmCollector.CONFIG);
    }
}
