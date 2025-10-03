
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NorautoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "norauto_fr",
        name: "Norauto.fr",
        description: "i18n.collectors.norauto_fr.description",
        version: "0",
        website: "https://www.norauto.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122534.jpg",
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
        entryUrl: "https://www.norauto.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NorautoFrCollector.CONFIG);
    }
}
