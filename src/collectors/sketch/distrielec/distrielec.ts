
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DistrielecCollector extends SketchCollector {

    static CONFIG = {
        id: "distrielec",
        name: "Distrielec",
        description: "i18n.collectors.distrielec.description",
        version: "0",
        website: "https://www.d4online.com/my-account/invoice-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777223.jpg",
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
        entryUrl: "https://www.d4online.com/my-account/invoice-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DistrielecCollector.CONFIG);
    }
}
