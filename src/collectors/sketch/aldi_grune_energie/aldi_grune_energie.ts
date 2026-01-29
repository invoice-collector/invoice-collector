
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AldiGruneEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "aldi_grune_energie",
        name: "Aldi Grune Energie",
        description: "i18n.collectors.aldi_grune_energie.description",
        version: "0",
        website: "https://click.123energie.de/123/getBillInit.sap",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2517120.jpg",
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
        loginUrl: "https://click.123energie.de/123/getBillInit.sap",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AldiGruneEnergieCollector.CONFIG);
    }
}
