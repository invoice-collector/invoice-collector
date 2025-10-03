
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JohnsonAndJohnsonFrCollector extends SketchCollector {

    static CONFIG = {
        id: "johnson_and_johnson_fr",
        name: "Johnson & Johnson (.fr)",
        description: "i18n.collectors.johnson_and_johnson_fr.description",
        version: "0",
        website: "https://www.jnjvisioncare.fr/e-ordering-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513494.jpg",
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
        entryUrl: "https://www.jnjvisioncare.fr/e-ordering-login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JohnsonAndJohnsonFrCollector.CONFIG);
    }
}
