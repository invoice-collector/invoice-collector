
import { SketchCollector } from '../../sketchCollector';

export class AdvanceGroupeCollector extends SketchCollector {

    static CONFIG = {
        id: "advance_groupe",
        name: "ADVANCE Groupe",
        description: "i18n.collectors.advance_groupe.description",
        version: "0",
        website: "https://artis-advance-bureautique.artis.fr/ArtisWebAdvanceBureautique/portail/login/auth/01.action?autoConnect=false",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200647.jpg",
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
        entryUrl: "https://artis-advance-bureautique.artis.fr/ArtisWebAdvanceBureautique/portail/login/auth/01.action?autoConnect=false",
    }

    constructor() {
        super(AdvanceGroupeCollector.CONFIG);
    }
}
