
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlexclipCollector extends SketchCollector {

    static CONFIG = {
        id: "flexclip",
        name: "FlexClip",
        description: "i18n.collectors.flexclip.description",
        version: "0",
        website: "https://www.flexclip.com/profile.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334885.jpg",
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
        entryUrl: "https://www.flexclip.com/profile.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlexclipCollector.CONFIG);
    }
}
