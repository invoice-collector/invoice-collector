
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ClubOpticLeaderCollector extends SketchCollector {

    static CONFIG = {
        id: "club_optic_leader",
        name: "Club Optic Leader",
        description: "i18n.collectors.club_optic_leader.description",
        version: "0",
        website: "https://adherents.opticlibre.com/espace-de-connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4355592.jpg",
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
        entryUrl: "https://adherents.opticlibre.com/espace-de-connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClubOpticLeaderCollector.CONFIG);
    }
}
