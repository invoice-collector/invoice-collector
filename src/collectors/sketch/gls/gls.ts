
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlsCollector extends SketchCollector {

    static CONFIG = {
        id: "gls",
        name: "GLS",
        description: "i18n.collectors.gls.description",
        version: "0",
        website: "https://gls-group.eu/DE/de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9892.jpg",
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
        entryUrl: "https://gls-group.eu/DE/de/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlsCollector.CONFIG);
    }
}
