import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PicotyGazCollector extends SketchCollector {

    static CONFIG = {
        id: "picotygaz",
        name: "Picoty Gaz",
        description: "i18n.collectors.picotygaz.description",
        version: "0",
        website: "https://gaz.picoty.fr",
        logo: "https://gaz.picoty.fr/wp-content/uploads/2020/03/logo-1.png",
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
        entryUrl: "https://wap.picoty.fr/igaz/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PicotyGazCollector.CONFIG);
    }
}
