
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TollfreeforwardingComCollector extends SketchCollector {

    static CONFIG = {
        id: "tollfreeforwarding_com",
        name: "TollFreeForwarding.com",
        description: "i18n.collectors.tollfreeforwarding_com.description",
        version: "0",
        website: "https://tollfreeforwarding.com/secure/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52355.jpg",
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
        entryUrl: "https://tollfreeforwarding.com/secure/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TollfreeforwardingComCollector.CONFIG);
    }
}
