
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CablenetCollector extends SketchCollector {

    static CONFIG = {
        id: "cablenet",
        name: "Cablenet",
        description: "i18n.collectors.cablenet.description",
        version: "0",
        website: "https://pay.cablenet.me/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2168751.jpg",
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
        entryUrl: "https://pay.cablenet.me/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CablenetCollector.CONFIG);
    }
}
