
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PactasCollector extends SketchCollector {

    static CONFIG = {
        id: "pactas",
        name: "Pactas",
        description: "i18n.collectors.pactas.description",
        version: "0",
        website: "https://itero.pactas.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534.jpg",
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
        entryUrl: "https://itero.pactas.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PactasCollector.CONFIG);
    }
}
