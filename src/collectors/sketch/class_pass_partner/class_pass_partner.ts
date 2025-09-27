
import { SketchCollector } from '../../sketchCollector';

export class ClassPassPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "class_pass_partner",
        name: "Class Pass Partner",
        description: "i18n.collectors.class_pass_partner.description",
        version: "0",
        website: "https://studios.classpass.com/stats/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2130742.jpg",
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
        entryUrl: "https://studios.classpass.com/stats/reports",
    }

    constructor() {
        super(ClassPassPartnerCollector.CONFIG);
    }
}
