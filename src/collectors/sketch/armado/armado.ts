
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArmadoCollector extends SketchCollector {

    static CONFIG = {
        id: "armado",
        name: "ARMADO",
        description: "i18n.collectors.armado.description",
        version: "0",
        website: "https://myarmado.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1272754.jpg",
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
        entryUrl: "https://myarmado.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArmadoCollector.CONFIG);
    }
}
