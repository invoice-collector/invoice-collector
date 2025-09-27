
import { SketchCollector } from '../../sketchCollector';

export class ClubChauffeurCollector extends SketchCollector {

    static CONFIG = {
        id: "club_chauffeur",
        name: "Club chauffeur",
        description: "i18n.collectors.club_chauffeur.description",
        version: "0",
        website: "https://www.clubchauffeur.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137153.jpg",
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
        entryUrl: "https://www.clubchauffeur.com/",
    }

    constructor() {
        super(ClubChauffeurCollector.CONFIG);
    }
}
