
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LyconetCollector extends SketchCollector {

    static CONFIG = {
        id: "lyconet",
        name: "lyconet",
        description: "i18n.collectors.lyconet.description",
        version: "0",
        website: "https://www.lyconet.com/de/profile/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230798.jpg",
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
        entryUrl: "https://www.lyconet.com/de/profile/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LyconetCollector.CONFIG);
    }
}
