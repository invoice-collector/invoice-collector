
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HitechprosCollector extends SketchCollector {

    static CONFIG = {
        id: "hitechpros",
        name: "HitechPros",
        description: "i18n.collectors.hitechpros.description",
        version: "0",
        website: "https://esn.hitechpros.com/mon-espace/parametres#!/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120094.jpg",
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
        entryUrl: "https://esn.hitechpros.com/mon-espace/parametres#!/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HitechprosCollector.CONFIG);
    }
}
