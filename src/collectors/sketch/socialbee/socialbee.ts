
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SocialbeeCollector extends SketchCollector {

    static CONFIG = {
        id: "socialbee",
        name: "SocialBee",
        description: "i18n.collectors.socialbee.description",
        version: "0",
        website: "https://app.socialbee.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4267043.jpg",
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
        entryUrl: "https://app.socialbee.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SocialbeeCollector.CONFIG);
    }
}
