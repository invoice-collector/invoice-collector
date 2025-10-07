
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AquarelleClubCollector extends SketchCollector {

    static CONFIG = {
        id: "aquarelle_club",
        name: "Aquarelle Club",
        description: "i18n.collectors.aquarelle_club.description",
        version: "0",
        website: "https://www.aquarelle.com/info/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116053.jpg",
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
        entryUrl: "https://www.aquarelle.com/info/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AquarelleClubCollector.CONFIG);
    }
}
