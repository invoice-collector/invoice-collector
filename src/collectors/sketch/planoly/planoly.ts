
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlanolyCollector extends SketchCollector {

    static CONFIG = {
        id: "planoly",
        name: "Planoly",
        description: "i18n.collectors.planoly.description",
        version: "0",
        website: "https://billing.planoly.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50658.jpg",
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
        entryUrl: "https://billing.planoly.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlanolyCollector.CONFIG);
    }
}
