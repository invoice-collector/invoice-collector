
import { SketchCollector } from '../../sketchCollector';

export class JustfitClubsCollector extends SketchCollector {

    static CONFIG = {
        id: "justfit_clubs",
        name: "JustFit Clubs",
        description: "i18n.collectors.justfit_clubs.description",
        version: "0",
        website: "https://www.justfit-clubs.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221818.jpg",
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
        entryUrl: "https://www.justfit-clubs.de/",
    }

    constructor() {
        super(JustfitClubsCollector.CONFIG);
    }
}
