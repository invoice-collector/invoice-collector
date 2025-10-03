
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JumpcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "jumpcloud",
        name: "JumpCloud",
        description: "i18n.collectors.jumpcloud.description",
        version: "0",
        website: "https://console.jumpcloud.com/#/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765222.jpg",
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
        entryUrl: "https://console.jumpcloud.com/#/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JumpcloudCollector.CONFIG);
    }
}
