
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrioriDataCollector extends SketchCollector {

    static CONFIG = {
        id: "priori_data",
        name: "priori data",
        description: "i18n.collectors.priori_data.description",
        version: "0",
        website: "https://prioridata.com/account/plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178491.jpg",
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
        entryUrl: "https://prioridata.com/account/plan",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrioriDataCollector.CONFIG);
    }
}
