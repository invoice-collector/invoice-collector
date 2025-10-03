
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProviderdiensteCollector extends SketchCollector {

    static CONFIG = {
        id: "providerdienste",
        name: "Providerdienste",
        description: "i18n.collectors.providerdienste.description",
        version: "0",
        website: "https://my.providerdienste.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10546.jpg",
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
        entryUrl: "https://my.providerdienste.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProviderdiensteCollector.CONFIG);
    }
}
