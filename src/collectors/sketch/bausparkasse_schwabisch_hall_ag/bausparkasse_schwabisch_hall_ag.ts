
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BausparkasseSchwabischHallAgCollector extends SketchCollector {

    static CONFIG = {
        id: "bausparkasse_schwabisch_hall_ag",
        name: "Bausparkasse Schwabisch Hall AG",
        description: "i18n.collectors.bausparkasse_schwabisch_hall_ag.description",
        version: "0",
        website: "https://www.schwaebisch-hall.de/mein-konto.html#messages",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211146.jpg",
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
        entryUrl: "https://www.schwaebisch-hall.de/mein-konto.html#messages",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BausparkasseSchwabischHallAgCollector.CONFIG);
    }
}
