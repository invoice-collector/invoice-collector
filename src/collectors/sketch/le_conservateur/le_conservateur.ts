
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeConservateurCollector extends SketchCollector {

    static CONFIG = {
        id: "le_conservateur",
        name: "Le Conservateur",
        description: "i18n.collectors.le_conservateur.description",
        version: "0",
        website: "https://espaceclient.conservateur.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115737.jpg",
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
        entryUrl: "https://espaceclient.conservateur.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeConservateurCollector.CONFIG);
    }
}
