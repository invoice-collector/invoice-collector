
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShirteeCollector extends SketchCollector {

    static CONFIG = {
        id: "shirtee",
        name: "Shirtee",
        description: "i18n.collectors.shirtee.description",
        version: "0",
        website: "https://www.shirtee.com/de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104932.jpg",
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
        entryUrl: "https://www.shirtee.com/de/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShirteeCollector.CONFIG);
    }
}
