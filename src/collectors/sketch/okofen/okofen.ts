
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OkofenCollector extends SketchCollector {

    static CONFIG = {
        id: "okofen",
        name: "OKoFEN",
        description: "i18n.collectors.okofen.description",
        version: "0",
        website: "https://www.oekofen.com/de-de/pelletheizung/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427327.jpg",
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
        entryUrl: "https://www.oekofen.com/de-de/pelletheizung/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OkofenCollector.CONFIG);
    }
}
