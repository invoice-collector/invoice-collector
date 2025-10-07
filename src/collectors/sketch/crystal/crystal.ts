
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CrystalCollector extends SketchCollector {

    static CONFIG = {
        id: "crystal",
        name: "Crystal",
        description: "i18n.collectors.crystal.description",
        version: "0",
        website: "https://www.crystalknows.com/app/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778999.jpg",
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
        entryUrl: "https://www.crystalknows.com/app/account/receipts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrystalCollector.CONFIG);
    }
}
