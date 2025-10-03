
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VaillantCollector extends SketchCollector {

    static CONFIG = {
        id: "vaillant",
        name: "Vaillant",
        description: "i18n.collectors.vaillant.description",
        version: "0",
        website: "https://www.vaillant.de/fachpartnernet/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426730.jpg",
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
        entryUrl: "https://www.vaillant.de/fachpartnernet/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VaillantCollector.CONFIG);
    }
}
