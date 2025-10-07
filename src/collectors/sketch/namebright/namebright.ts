
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NamebrightCollector extends SketchCollector {

    static CONFIG = {
        id: "namebright",
        name: "Namebright",
        description: "i18n.collectors.namebright.description",
        version: "0",
        website: "https://www.namebright.com/Settings#Billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336516.jpg",
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
        entryUrl: "https://www.namebright.com/Settings#Billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NamebrightCollector.CONFIG);
    }
}
