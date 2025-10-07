
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MmfProCollector extends SketchCollector {

    static CONFIG = {
        id: "mmf_pro",
        name: "MMF-Pro",
        description: "i18n.collectors.mmf_pro.description",
        version: "0",
        website: "https://www.mmf-pro.com/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515587.jpg",
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
        entryUrl: "https://www.mmf-pro.com/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MmfProCollector.CONFIG);
    }
}
