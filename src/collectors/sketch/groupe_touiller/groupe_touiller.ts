
import { SketchCollector } from '../../sketchCollector';

export class GroupeTouillerCollector extends SketchCollector {

    static CONFIG = {
        id: "groupe_touiller",
        name: "Groupe Touiller",
        description: "i18n.collectors.groupe_touiller.description",
        version: "0",
        website: "https://portail-touiller.artis.fr/ArtisWebTouiller/portail/login/auth/01.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571692.jpg",
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
        entryUrl: "https://portail-touiller.artis.fr/ArtisWebTouiller/portail/login/auth/01.action",
    }

    constructor() {
        super(GroupeTouillerCollector.CONFIG);
    }
}
