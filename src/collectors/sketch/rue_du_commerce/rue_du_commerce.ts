
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RueDuCommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "rue_du_commerce",
        name: "Rue du Commerce",
        description: "i18n.collectors.rue_du_commerce.description",
        version: "0",
        website: "https://www.rueducommerce.fr/client/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27314.jpg",
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
        entryUrl: "https://www.rueducommerce.fr/client/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RueDuCommerceCollector.CONFIG);
    }
}
