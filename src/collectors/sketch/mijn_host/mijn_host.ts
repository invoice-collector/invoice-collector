
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MijnHostCollector extends SketchCollector {

    static CONFIG = {
        id: "mijn_host",
        name: "Mijn.host",
        description: "i18n.collectors.mijn_host.description",
        version: "0",
        website: "https://mijn.host/cp/account/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973180.jpg",
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
        entryUrl: "https://mijn.host/cp/account/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MijnHostCollector.CONFIG);
    }
}
