
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class H2proBerlinerWasserbetriebeCollector extends SketchCollector {

    static CONFIG = {
        id: "h2pro_berliner_wasserbetriebe",
        name: "h2pro Berliner Wasserbetriebe",
        description: "i18n.collectors.h2pro_berliner_wasserbetriebe.description",
        version: "0",
        website: "https://h2pro.bwb.de/powercommerce/bwb/fo/portal/professional",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006289.jpg",
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
        loginUrl: "https://h2pro.bwb.de/powercommerce/bwb/fo/portal/professional",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(H2proBerlinerWasserbetriebeCollector.CONFIG);
    }
}
