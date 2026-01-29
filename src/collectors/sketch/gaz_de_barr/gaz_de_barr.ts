
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GazDeBarrCollector extends SketchCollector {

    static CONFIG = {
        id: "gaz_de_barr",
        name: "Gaz de Barr",
        description: "i18n.collectors.gaz_de_barr.description",
        version: "0",
        website: "https://ael.gaz-de-barr.fr/application/jsp/arc/habilitation/contrat.ZoomerContratOServicesSouscrits.go",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385205.jpg",
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
        loginUrl: "https://ael.gaz-de-barr.fr/application/jsp/arc/habilitation/contrat.ZoomerContratOServicesSouscrits.go",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GazDeBarrCollector.CONFIG);
    }
}
