
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MoonFachhandelCollector extends SketchCollector {

    static CONFIG = {
        id: "moon_fachhandel",
        name: "Moon Fachhandel",
        description: "i18n.collectors.moon_fachhandel.description",
        version: "0",
        website: "https://www.moon-fachhandel.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3023952.jpg",
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
        entryUrl: "https://www.moon-fachhandel.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MoonFachhandelCollector.CONFIG);
    }
}
