
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FragEinenAnwaltDeCollector extends SketchCollector {

    static CONFIG = {
        id: "frag_einen_anwalt_de",
        name: "Frag-einen-Anwalt.de",
        description: "i18n.collectors.frag_einen_anwalt_de.description",
        version: "0",
        website: "https://www.123recht.de/thick_register.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107060.jpg",
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
        entryUrl: "https://www.123recht.de/thick_register.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FragEinenAnwaltDeCollector.CONFIG);
    }
}
