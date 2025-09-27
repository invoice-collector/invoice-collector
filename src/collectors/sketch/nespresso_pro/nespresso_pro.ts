
import { SketchCollector } from '../../sketchCollector';

export class NespressoProCollector extends SketchCollector {

    static CONFIG = {
        id: "nespresso_pro",
        name: "Nespresso(pro)",
        description: "i18n.collectors.nespresso_pro.description",
        version: "0",
        website: "https://www.nespresso.com/pro",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/565935.jpg",
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
        entryUrl: "https://www.nespresso.com/pro",
    }

    constructor() {
        super(NespressoProCollector.CONFIG);
    }
}
