
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RecruiteeCollector extends SketchCollector {

    static CONFIG = {
        id: "recruitee",
        name: "recruitee",
        description: "i18n.collectors.recruitee.description",
        version: "0",
        website: "https://auth.recruitee.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36952.jpg",
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
        entryUrl: "https://auth.recruitee.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RecruiteeCollector.CONFIG);
    }
}
