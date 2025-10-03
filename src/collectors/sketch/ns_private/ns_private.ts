
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NsPrivateCollector extends SketchCollector {

    static CONFIG = {
        id: "ns_private",
        name: "NS Private",
        description: "i18n.collectors.ns_private.description",
        version: "0",
        website: "https://login.ns.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1936220.jpg",
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
        entryUrl: "https://login.ns.nl/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NsPrivateCollector.CONFIG);
    }
}
