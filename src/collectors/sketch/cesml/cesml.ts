
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CesmlCollector extends SketchCollector {

    static CONFIG = {
        id: "cesml",
        name: "CESML",
        description: "i18n.collectors.cesml.description",
        version: "0",
        website: "https://moncompte-cesml.multield.net/application/jsp/arc/habilitation/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436925.jpg",
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
        entryUrl: "https://moncompte-cesml.multield.net/application/jsp/arc/habilitation/login.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CesmlCollector.CONFIG);
    }
}
