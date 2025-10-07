
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGpmCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gpm",
        name: "Mutuelle GPM",
        description: "i18n.collectors.mutuelle_gpm.description",
        version: "0",
        website: "https://espace-adherent.gpm.fr/connexion.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128483.jpg",
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
        entryUrl: "https://espace-adherent.gpm.fr/connexion.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGpmCollector.CONFIG);
    }
}
