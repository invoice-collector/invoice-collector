
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DergruenepunktCollector extends SketchCollector {

    static CONFIG = {
        id: "dergruenepunkt",
        name: "DerGruenePunkt",
        description: "i18n.collectors.dergruenepunkt.description",
        version: "0",
        website: "https://www.gruener-punkt.de/de/portale.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47744.jpg",
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
        entryUrl: "https://www.gruener-punkt.de/de/portale.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DergruenepunktCollector.CONFIG);
    }
}
