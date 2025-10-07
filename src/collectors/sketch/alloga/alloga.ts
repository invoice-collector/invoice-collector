
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AllogaCollector extends SketchCollector {

    static CONFIG = {
        id: "alloga",
        name: "Alloga",
        description: "i18n.collectors.alloga.description",
        version: "0",
        website: "https://www.alloga.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496960.jpg",
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
        entryUrl: "https://www.alloga.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllogaCollector.CONFIG);
    }
}
