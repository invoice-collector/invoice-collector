
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GuradoCollector extends SketchCollector {

    static CONFIG = {
        id: "gurado",
        name: "Gurado",
        description: "i18n.collectors.gurado.description",
        version: "0",
        website: "http://www.gurado.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37223.jpg",
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
        entryUrl: "http://www.gurado.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GuradoCollector.CONFIG);
    }
}
