
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlicktippCollector extends SketchCollector {

    static CONFIG = {
        id: "klicktipp",
        name: "KlickTipp",
        description: "i18n.collectors.klicktipp.description",
        version: "0",
        website: "https://www.klicktipp.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555213.jpg",
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
        entryUrl: "https://www.klicktipp.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlicktippCollector.CONFIG);
    }
}
