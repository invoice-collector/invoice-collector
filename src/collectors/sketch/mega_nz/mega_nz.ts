
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MegaNzCollector extends SketchCollector {

    static CONFIG = {
        id: "mega_nz",
        name: "Mega NZ",
        description: "i18n.collectors.mega_nz.description",
        version: "0",
        website: "https://mega.nz/fm/user-management/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419705.jpg",
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
        entryUrl: "https://mega.nz/fm/user-management/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MegaNzCollector.CONFIG);
    }
}
