
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GreenlineCollector extends SketchCollector {

    static CONFIG = {
        id: "greenline",
        name: "Greenline",
        description: "i18n.collectors.greenline.description",
        version: "0",
        website: "https://alt.greenline.de/members/bill_pdf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334791.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://alt.greenline.de/members/bill_pdf",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreenlineCollector.CONFIG);
    }
}
