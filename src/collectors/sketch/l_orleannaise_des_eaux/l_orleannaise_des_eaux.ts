
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LOrleannaiseDesEauxCollector extends SketchCollector {

    static CONFIG = {
        id: "l_orleannaise_des_eaux",
        name: "L\'ORLEANNAISE DES EAUX",
        description: "i18n.collectors.l_orleannaise_des_eaux.description",
        version: "0",
        website: "https://leaudorleansmetropole.toutsurmoneau.fr/mon-compte-en-ligne/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4120196.jpg",
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
        loginUrl: "https://leaudorleansmetropole.toutsurmoneau.fr/mon-compte-en-ligne/mes-factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LOrleannaiseDesEauxCollector.CONFIG);
    }
}
