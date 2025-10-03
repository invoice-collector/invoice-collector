
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StardslCollector extends SketchCollector {

    static CONFIG = {
        id: "stardsl",
        name: "StarDSL",
        description: "i18n.collectors.stardsl.description",
        version: "0",
        website: "https://www.stardsl.net/anmeldung/servlet/Cif1?func=13&subc=show&template=202",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9156.jpg",
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
        entryUrl: "https://www.stardsl.net/anmeldung/servlet/Cif1?func=13&subc=show&template=202",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StardslCollector.CONFIG);
    }
}
