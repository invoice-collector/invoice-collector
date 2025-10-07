
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NelioSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "nelio_software",
        name: "Nelio Software",
        description: "i18n.collectors.nelio_software.description",
        version: "0",
        website: "https://neliocontent.onfastspring.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953754.jpg",
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
        entryUrl: "https://neliocontent.onfastspring.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NelioSoftwareCollector.CONFIG);
    }
}
