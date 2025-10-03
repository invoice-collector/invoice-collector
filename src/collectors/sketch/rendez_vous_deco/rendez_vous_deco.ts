
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RendezVousDecoCollector extends SketchCollector {

    static CONFIG = {
        id: "rendez_vous_deco",
        name: "Rendez-vous deco",
        description: "i18n.collectors.rendez_vous_deco.description",
        version: "0",
        website: "https://www.rendezvousdeco.com/customer/account/login/?___SID=S",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122792.jpg",
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
        entryUrl: "https://www.rendezvousdeco.com/customer/account/login/?___SID=S",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RendezVousDecoCollector.CONFIG);
    }
}
