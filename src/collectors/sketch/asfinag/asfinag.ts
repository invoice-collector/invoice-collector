
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AsfinagCollector extends SketchCollector {

    static CONFIG = {
        id: "asfinag",
        name: "ASFINAG",
        description: "i18n.collectors.asfinag.description",
        version: "0",
        website: "https://shop.asfinag.at/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42583.jpg",
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
        entryUrl: "https://shop.asfinag.at/de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AsfinagCollector.CONFIG);
    }
}
