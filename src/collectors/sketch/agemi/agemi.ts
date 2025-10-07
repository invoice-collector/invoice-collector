
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AgemiCollector extends SketchCollector {

    static CONFIG = {
        id: "agemi",
        name: "AGEMI",
        description: "i18n.collectors.agemi.description",
        version: "0",
        website: "https://extranet.agemi.net/client/attestations/index/old/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842118.jpg",
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
        entryUrl: "https://extranet.agemi.net/client/attestations/index/old/1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AgemiCollector.CONFIG);
    }
}
