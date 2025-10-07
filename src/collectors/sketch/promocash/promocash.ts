
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PromocashCollector extends SketchCollector {

    static CONFIG = {
        id: "promocash",
        name: "Promocash",
        description: "i18n.collectors.promocash.description",
        version: "0",
        website: "https://www.promocash.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391639.jpg",
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
        entryUrl: "https://www.promocash.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PromocashCollector.CONFIG);
    }
}
