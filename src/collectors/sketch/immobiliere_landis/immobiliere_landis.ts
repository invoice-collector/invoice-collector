
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImmobiliereLandisCollector extends SketchCollector {

    static CONFIG = {
        id: "immobiliere_landis",
        name: "Immobiliere LANDIS",
        description: "i18n.collectors.immobiliere_landis.description",
        version: "0",
        website: "https://immobiliere-landis.mygercop.com/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213413.jpg",
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
        entryUrl: "https://immobiliere-landis.mygercop.com/connexion/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImmobiliereLandisCollector.CONFIG);
    }
}
