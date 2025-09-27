
import { SketchCollector } from '../../sketchCollector';

export class GeneraliAtCollector extends SketchCollector {

    static CONFIG = {
        id: "generali_at",
        name: "Generali.at",
        description: "i18n.collectors.generali_at.description",
        version: "0",
        website: "https://kundenportal.generali.at/iss/gui/kundenportal/login/login.seam?conversationId=16500",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2739335.jpg",
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
        entryUrl: "https://kundenportal.generali.at/iss/gui/kundenportal/login/login.seam?conversationId=16500",
    }

    constructor() {
        super(GeneraliAtCollector.CONFIG);
    }
}
