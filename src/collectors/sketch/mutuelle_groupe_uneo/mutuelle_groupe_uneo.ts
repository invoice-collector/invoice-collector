
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGroupeUneoCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_groupe_uneo",
        name: "Mutuelle Groupe Uneo",
        description: "i18n.collectors.mutuelle_groupe_uneo.description",
        version: "0",
        website: "https://www.groupe-uneo.fr/connexion/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129094.jpg",
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
        entryUrl: "https://www.groupe-uneo.fr/connexion/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGroupeUneoCollector.CONFIG);
    }
}
