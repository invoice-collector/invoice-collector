
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AffiliconCollector extends SketchCollector {

    static CONFIG = {
        id: "affilicon",
        name: "Affilicon",
        description: "i18n.collectors.affilicon.description",
        version: "0",
        website: "https://my.affilicon.net/common/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11804.jpg",
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
        entryUrl: "https://my.affilicon.net/common/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AffiliconCollector.CONFIG);
    }
}
