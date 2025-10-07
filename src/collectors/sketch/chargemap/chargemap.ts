
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChargemapCollector extends SketchCollector {

    static CONFIG = {
        id: "chargemap",
        name: "Chargemap",
        description: "i18n.collectors.chargemap.description",
        version: "0",
        website: "https://fr.chargemap.com/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534313.jpg",
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
        entryUrl: "https://fr.chargemap.com/user/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChargemapCollector.CONFIG);
    }
}
