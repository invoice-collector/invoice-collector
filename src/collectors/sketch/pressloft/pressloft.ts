
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PressloftCollector extends SketchCollector {

    static CONFIG = {
        id: "pressloft",
        name: "Pressloft",
        description: "i18n.collectors.pressloft.description",
        version: "0",
        website: "https://www.pressloft.com/app/admin/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436407.jpg",
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
        entryUrl: "https://www.pressloft.com/app/admin/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PressloftCollector.CONFIG);
    }
}
