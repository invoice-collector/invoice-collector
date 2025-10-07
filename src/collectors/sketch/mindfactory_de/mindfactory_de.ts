
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MindfactoryDeCollector extends SketchCollector {

    static CONFIG = {
        id: "mindfactory_de",
        name: "Mindfactory.de",
        description: "i18n.collectors.mindfactory_de.description",
        version: "0",
        website: "https://www.mindfactory.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9752.jpg",
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
        entryUrl: "https://www.mindfactory.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MindfactoryDeCollector.CONFIG);
    }
}
