
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CorelDrawCollector extends SketchCollector {

    static CONFIG = {
        id: "corel_draw",
        name: "Corel Draw",
        description: "i18n.collectors.corel_draw.description",
        version: "0",
        website: "https://account.corel.com/accounts/user/accountOrderHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419738.jpg",
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
        entryUrl: "https://account.corel.com/accounts/user/accountOrderHistory",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CorelDrawCollector.CONFIG);
    }
}
