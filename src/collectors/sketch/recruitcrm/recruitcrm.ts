
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RecruitcrmCollector extends SketchCollector {

    static CONFIG = {
        id: "recruitcrm",
        name: "RecruitCRM",
        description: "i18n.collectors.recruitcrm.description",
        version: "0",
        website: "https://app.recruitcrm.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669987.jpg",
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
        entryUrl: "https://app.recruitcrm.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RecruitcrmCollector.CONFIG);
    }
}
