
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BritaYourceCollector extends SketchCollector {

    static CONFIG = {
        id: "brita_yource",
        name: "brita yource",
        description: "i18n.collectors.brita_yource.description",
        version: "0",
        website: "https://www.brita-yource.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185050.jpg",
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
        entryUrl: "https://www.brita-yource.de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BritaYourceCollector.CONFIG);
    }
}
