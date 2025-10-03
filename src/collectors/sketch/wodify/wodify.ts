
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WodifyCollector extends SketchCollector {

    static CONFIG = {
        id: "wodify",
        name: "Wodify",
        description: "i18n.collectors.wodify.description",
        version: "0",
        website: "https://app.wodify.com/WodifyAdminTheme/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46745.jpg",
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
        entryUrl: "https://app.wodify.com/WodifyAdminTheme/Login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WodifyCollector.CONFIG);
    }
}
