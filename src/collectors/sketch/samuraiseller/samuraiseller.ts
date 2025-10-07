
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SamuraisellerCollector extends SketchCollector {

    static CONFIG = {
        id: "samuraiseller",
        name: "samuraiseller",
        description: "i18n.collectors.samuraiseller.description",
        version: "0",
        website: "https://www.samuraiseller.com/members/samsvc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241843.jpg",
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
        entryUrl: "https://www.samuraiseller.com/members/samsvc",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SamuraisellerCollector.CONFIG);
    }
}
