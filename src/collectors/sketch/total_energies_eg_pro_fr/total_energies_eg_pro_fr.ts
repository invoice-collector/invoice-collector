
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TotalEnergiesEgProFrCollector extends SketchCollector {

    static CONFIG = {
        id: "total_energies_eg_pro_fr",
        name: "i18n.collectors.total_energies_eg_pro_fr.name",
        description: "i18n.collectors.total_energies_eg_pro_fr.description",
        version: "0",
        website: "https://pro.totalenergies.fr/",
        logo: "https://upload.wikimedia.org/wikipedia/fr/f/f7/Logo_TotalEnergies.svg",
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
        loginUrl: "https://pro.totalenergies.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TotalEnergiesEgProFrCollector.CONFIG);
    }
}
