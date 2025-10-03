
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LinkedinHelperCollector extends SketchCollector {

    static CONFIG = {
        id: "linkedin_helper",
        name: "LinkedIn Helper",
        description: "i18n.collectors.linkedin_helper.description",
        version: "0",
        website: "https://www.linkedhelper.com/member/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777344.jpg",
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
        entryUrl: "https://www.linkedhelper.com/member/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkedinHelperCollector.CONFIG);
    }
}
