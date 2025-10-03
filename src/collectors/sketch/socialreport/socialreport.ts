
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SocialreportCollector extends SketchCollector {

    static CONFIG = {
        id: "socialreport",
        name: "SocialReport",
        description: "i18n.collectors.socialreport.description",
        version: "0",
        website: "https://www.socialreport.com/settings.htm#subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135855.jpg",
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
        entryUrl: "https://www.socialreport.com/settings.htm#subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SocialreportCollector.CONFIG);
    }
}
