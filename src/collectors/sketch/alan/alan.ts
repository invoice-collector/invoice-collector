
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlanCollector extends SketchCollector {

    static CONFIG = {
        id: "alan",
        name: "Alan",
        description: "i18n.collectors.alan.description",
        version: "0",
        website: "https://alan.com/app/dashboard/pro/admin/paie-et-comptabilite",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135861.jpg",
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
        entryUrl: "https://alan.com/app/dashboard/pro/admin/paie-et-comptabilite",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlanCollector.CONFIG);
    }
}
