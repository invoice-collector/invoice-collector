
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DescampsBoisFrCollector extends SketchCollector {

    static CONFIG = {
        id: "descamps_bois_fr",
        name: "Descamps Bois",
        description: "i18n.collectors.descamps_bois_fr.description",
        version: "0",
        website: "https://www.descamps-bois.fr/",
        logo: "https://www.descamps-bois.fr/bundles/_decfront/img/Logo_grand.svg",
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
        entryUrl: "https://www.descamps-bois.fr/connexion?_target_path=/&subdomain=www&extension=fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DescampsBoisFrCollector.CONFIG);
    }
}
