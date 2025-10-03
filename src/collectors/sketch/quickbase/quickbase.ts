
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuickbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbase",
        name: "QuickBase",
        description: "i18n.collectors.quickbase.description",
        version: "0",
        website: "https://allmyhomes.quickbase.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76768.jpg",
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
        entryUrl: "https://allmyhomes.quickbase.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuickbaseCollector.CONFIG);
    }
}
