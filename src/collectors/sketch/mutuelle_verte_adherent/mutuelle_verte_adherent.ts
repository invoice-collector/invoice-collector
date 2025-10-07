
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleVerteAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_verte_adherent",
        name: "Mutuelle Verte Adherent",
        description: "i18n.collectors.mutuelle_verte_adherent.description",
        version: "0",
        website: "https://www.mutuelleverte.com/connexion/##a",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130700.jpg",
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
        entryUrl: "https://www.mutuelleverte.com/connexion/##a",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleVerteAdherentCollector.CONFIG);
    }
}
