
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RepdocCollector extends SketchCollector {

    static CONFIG = {
        id: "repdoc",
        name: "repdoc",
        description: "i18n.collectors.repdoc.description",
        version: "0",
        website: "https://www.repdoc.com/WM/#Ws/lists/listdetail/(list:belegelist;mode=1;filter=;complexFilter=//detail:belegedetail;id=e855c2ac-696a-4844-842c-709821e53ed8)",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846288.jpg",
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
        entryUrl: "https://www.repdoc.com/WM/#Ws/lists/listdetail/(list:belegelist;mode=1;filter=;complexFilter=//detail:belegedetail;id=e855c2ac-696a-4844-842c-709821e53ed8)",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RepdocCollector.CONFIG);
    }
}
