
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HepsterCollector extends SketchCollector {

    static CONFIG = {
        id: "hepster",
        name: "Hepster",
        description: "i18n.collectors.hepster.description",
        version: "0",
        website: "https://hepster.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368221.jpg",
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
        entryUrl: "https://hepster.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HepsterCollector.CONFIG);
    }
}
