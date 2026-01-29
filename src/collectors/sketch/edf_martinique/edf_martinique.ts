
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdfMartiniqueCollector extends SketchCollector {

    static CONFIG = {
        id: "edf_martinique",
        name: "EDF Martinique",
        description: "i18n.collectors.edf_martinique.description",
        version: "0",
        website: "https://sei-ael-martinique.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
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
        loginUrl: "https://sei-ael-martinique.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EdfMartiniqueCollector.CONFIG);
    }
}
