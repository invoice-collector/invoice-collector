
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InstauprgadeCollector extends SketchCollector {

    static CONFIG = {
        id: "instauprgade",
        name: "instauprgade",
        description: "i18n.collectors.instauprgade.description",
        version: "0",
        website: "https://abo.instaupgrade.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385996.jpg",
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
        entryUrl: "https://abo.instaupgrade.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InstauprgadeCollector.CONFIG);
    }
}
