
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConectabalearCollector extends SketchCollector {

    static CONFIG = {
        id: "conectabalear",
        name: "ConectaBalear",
        description: "i18n.collectors.conectabalear.description",
        version: "0",
        website: "https://www.conectabalear.com/en/clientes/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153613.jpg",
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
        entryUrl: "https://www.conectabalear.com/en/clientes/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConectabalearCollector.CONFIG);
    }
}
