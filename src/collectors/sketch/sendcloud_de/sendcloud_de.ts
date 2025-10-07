
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SendcloudDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sendcloud_de",
        name: "SendCloud.de",
        description: "i18n.collectors.sendcloud_de.description",
        version: "0",
        website: "https://panel.sendcloud.sc/accounts/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14579.jpg",
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
        entryUrl: "https://panel.sendcloud.sc/accounts/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SendcloudDeCollector.CONFIG);
    }
}
