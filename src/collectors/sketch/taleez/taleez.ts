
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TaleezCollector extends SketchCollector {

    static CONFIG = {
        id: "taleez",
        name: "Taleez",
        description: "i18n.collectors.taleez.description",
        version: "0",
        website: "https://app.taleez.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919277.jpg",
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
        entryUrl: "https://app.taleez.com/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TaleezCollector.CONFIG);
    }
}
