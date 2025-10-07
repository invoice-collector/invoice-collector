
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmallrigCollector extends SketchCollector {

    static CONFIG = {
        id: "smallrig",
        name: "smallrig",
        description: "i18n.collectors.smallrig.description",
        version: "0",
        website: "https://www.smallrig.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126841.jpg",
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
        entryUrl: "https://www.smallrig.com/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmallrigCollector.CONFIG);
    }
}
