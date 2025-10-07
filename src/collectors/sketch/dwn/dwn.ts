
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DwnCollector extends SketchCollector {

    static CONFIG = {
        id: "dwn",
        name: "DWN",
        description: "i18n.collectors.dwn.description",
        version: "0",
        website: "https://deutsche-wirtschafts-nachrichten.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2130757.jpg",
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
        entryUrl: "https://deutsche-wirtschafts-nachrichten.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DwnCollector.CONFIG);
    }
}
