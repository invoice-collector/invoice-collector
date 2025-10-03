
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NutrimuscleCollector extends SketchCollector {

    static CONFIG = {
        id: "nutrimuscle",
        name: "Nutrimuscle",
        description: "i18n.collectors.nutrimuscle.description",
        version: "0",
        website: "https://www.nutrimuscle.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122532.jpg",
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
        entryUrl: "https://www.nutrimuscle.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NutrimuscleCollector.CONFIG);
    }
}
