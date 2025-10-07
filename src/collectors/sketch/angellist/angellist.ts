
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AngellistCollector extends SketchCollector {

    static CONFIG = {
        id: "angellist",
        name: "Angellist",
        description: "i18n.collectors.angellist.description",
        version: "0",
        website: "https://angel.co/layer-8/recruiting/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153901.jpg",
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
        entryUrl: "https://angel.co/layer-8/recruiting/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AngellistCollector.CONFIG);
    }
}
