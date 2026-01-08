import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AntargazCollector extends SketchCollector {

    static CONFIG = {
        id: "antargaz",
        name: "Antargaz",
        description: "i18n.collectors.antargaz.description",
        version: "0",
        website: "https://antargaz.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Logo_Antargaz_Energies.png",
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
        loginUrl: "https://espace-clients.antargaz.fr/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AntargazCollector.CONFIG);
    }
}
