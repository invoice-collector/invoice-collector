
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShulexVocAiCollector extends SketchCollector {

    static CONFIG = {
        id: "shulex_voc_ai",
        name: "Shulex Voc.ai",
        description: "i18n.collectors.shulex_voc_ai.description",
        version: "0",
        website: "https://apps.voc.ai/app#/account/user?redirect=%2Fapp&type=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445828.jpg",
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
        entryUrl: "https://apps.voc.ai/app#/account/user?redirect=%2Fapp&type=billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShulexVocAiCollector.CONFIG);
    }
}
