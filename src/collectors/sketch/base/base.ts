
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaseCollector extends SketchCollector {

    static CONFIG = {
        id: "base",
        name: "BASE",
        description: "i18n.collectors.base.description",
        version: "0",
        website: "https://dsl.o2online.de/selfcare/content/segment/kundencenter/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/306.jpg",
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
        entryUrl: "https://dsl.o2online.de/selfcare/content/segment/kundencenter/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaseCollector.CONFIG);
    }
}
