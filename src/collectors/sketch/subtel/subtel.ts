
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SubtelCollector extends SketchCollector {

    static CONFIG = {
        id: "subtel",
        name: "Subtel",
        description: "i18n.collectors.subtel.description",
        version: "0",
        website: "https://www.subtel.fr/index.php?cl=subtel_account_extend_bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/752173.jpg",
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
        entryUrl: "https://www.subtel.fr/index.php?cl=subtel_account_extend_bill",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SubtelCollector.CONFIG);
    }
}
