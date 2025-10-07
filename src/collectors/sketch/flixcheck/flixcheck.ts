
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlixcheckCollector extends SketchCollector {

    static CONFIG = {
        id: "flixcheck",
        name: "flixcheck",
        description: "i18n.collectors.flixcheck.description",
        version: "0",
        website: "https://app.flixcheck.com/portal/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1240137.jpg",
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
        entryUrl: "https://app.flixcheck.com/portal/settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlixcheckCollector.CONFIG);
    }
}
