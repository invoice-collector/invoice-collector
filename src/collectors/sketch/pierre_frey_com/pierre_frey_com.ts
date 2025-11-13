
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PierreFreyComCollector extends SketchCollector {

    static CONFIG = {
        id: "pierre_frey_com",
        name: "Pierre Frey",
        description: "i18n.collectors.pierre_frey_com.description",
        version: "0",
        website: "https://www.pierrefrey.com/",
        logo: "https://www.pierrefrey.com/images/logo-pierre-frey.svg",
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
        entryUrl: "https://www.pierrefrey.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PierreFreyComCollector.CONFIG);
    }
}
