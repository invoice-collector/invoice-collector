
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KeySystemsRrpproxyCollector extends SketchCollector {

    static CONFIG = {
        id: "key_systems_rrpproxy",
        name: "Key-Systems - RRPproxy",
        description: "i18n.collectors.key_systems_rrpproxy.description",
        version: "0",
        website: "https://wi.rrpproxy.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31075.jpg",
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
        entryUrl: "https://wi.rrpproxy.net",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KeySystemsRrpproxyCollector.CONFIG);
    }
}
