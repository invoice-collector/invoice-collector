
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EarthClassMailCollector extends SketchCollector {

    static CONFIG = {
        id: "earth_class_mail",
        name: "Earth Class Mail",
        description: "i18n.collectors.earth_class_mail.description",
        version: "0",
        website: "https://www.billingportal.com/s/earthclassmail/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60696.jpg",
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
        entryUrl: "https://www.billingportal.com/s/earthclassmail/statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EarthClassMailCollector.CONFIG);
    }
}
