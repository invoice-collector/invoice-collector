
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGroupeLourmelEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_groupe_lourmel_entreprise",
        name: "Mutuelle Groupe Lourmel - entreprise",
        description: "i18n.collectors.mutuelle_groupe_lourmel_entreprise.description",
        version: "0",
        website: "https://espaceabonne.lourmel.com/lourmel/login/jsp/indexEnt.jsp?expired=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129091.jpg",
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
        entryUrl: "https://espaceabonne.lourmel.com/lourmel/login/jsp/indexEnt.jsp?expired=true",
    }

    constructor() {
        super(MutuelleGroupeLourmelEntrepriseCollector.CONFIG);
    }
}
