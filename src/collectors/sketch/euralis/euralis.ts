import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EuralisCollector extends SketchCollector {

    static CONFIG = {
        id: "euralis",
        name: "Euralis",
        description: "i18n.collectors.euralis.description",
        version: "0",
        website: "https://www.euralis.fr",
        logo: "https://www.euralis.fr/wp-content/uploads/2021/09/logo.png",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuralisCollector.CONFIG);
    }
}
