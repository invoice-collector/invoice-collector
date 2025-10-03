
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WindelnDeCollector extends SketchCollector {

    static CONFIG = {
        id: "windeln_de",
        name: "Windeln.de",
        description: "i18n.collectors.windeln_de.description",
        version: "0",
        website: "https://www.windeln.de/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135927.jpg",
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
        entryUrl: "https://www.windeln.de/account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WindelnDeCollector.CONFIG);
    }
}
