
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlugsurfingCollector extends SketchCollector {

    static CONFIG = {
        id: "plugsurfing",
        name: "PlugSurfing",
        description: "i18n.collectors.plugsurfing.description",
        version: "0",
        website: "https://new.plugsurfing.com/sign-in?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27751.jpg",
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
        entryUrl: "https://new.plugsurfing.com/sign-in?lang=en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlugsurfingCollector.CONFIG);
    }
}
