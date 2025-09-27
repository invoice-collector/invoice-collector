
import { SketchCollector } from '../../sketchCollector';

export class DealguardianCollector extends SketchCollector {

    static CONFIG = {
        id: "dealguardian",
        name: "DealGuardian",
        description: "i18n.collectors.dealguardian.description",
        version: "0",
        website: "https://dealguardian.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19695.jpg",
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
        entryUrl: "https://dealguardian.com/login/",
    }

    constructor() {
        super(DealguardianCollector.CONFIG);
    }
}
