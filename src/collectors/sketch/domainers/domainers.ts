
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DomainersCollector extends SketchCollector {

    static CONFIG = {
        id: "domainers",
        name: "domainers",
        description: "i18n.collectors.domainers.description",
        version: "0",
        website: "https://order.domainers.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12641.jpg",
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
        entryUrl: "https://order.domainers.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DomainersCollector.CONFIG);
    }
}
