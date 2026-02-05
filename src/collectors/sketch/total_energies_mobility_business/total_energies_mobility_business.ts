import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TotalEnergiesMobilityCollector extends SketchCollector {

    static CONFIG = {
        id: "total_energies_mobility_business",
        name: "Total Energies Mobility Business",
        description: "i18n.collectors.total_energies_mobility_business.description",
        version: "0",
        website: "https://mobility.totalenergies.com",
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
        loginUrl: "https://client.mobilitybusiness.totalenergies.com/signIn",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TotalEnergiesMobilityCollector.CONFIG);
    }
}
