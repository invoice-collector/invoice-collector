
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdvancedwebCollector extends SketchCollector {

    static CONFIG = {
        id: "advancedweb",
        name: "AdvancedWeb",
        description: "i18n.collectors.advancedweb.description",
        version: "0",
        website: "https://app.advancedwebranking.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282424.jpg",
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
        entryUrl: "https://app.advancedwebranking.com/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdvancedwebCollector.CONFIG);
    }
}
