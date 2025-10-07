
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoothemesCollector extends SketchCollector {

    static CONFIG = {
        id: "woothemes",
        name: "WooThemes",
        description: "i18n.collectors.woothemes.description",
        version: "0",
        website: "https://woocommerce.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3667.jpg",
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
        entryUrl: "https://woocommerce.com/my-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoothemesCollector.CONFIG);
    }
}
