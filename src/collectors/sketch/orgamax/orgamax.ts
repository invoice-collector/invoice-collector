
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrgamaxCollector extends SketchCollector {

    static CONFIG = {
        id: "orgamax",
        name: "Orgamax",
        description: "i18n.collectors.orgamax.description",
        version: "0",
        website: "http://www.orgamax.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150863.jpg",
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
        entryUrl: "http://www.orgamax.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrgamaxCollector.CONFIG);
    }
}
