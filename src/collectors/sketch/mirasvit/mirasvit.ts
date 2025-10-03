
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MirasvitCollector extends SketchCollector {

    static CONFIG = {
        id: "mirasvit",
        name: "Mirasvit",
        description: "i18n.collectors.mirasvit.description",
        version: "0",
        website: "https://mirasvit.com/sales/invoice/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4397138.jpg",
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
        entryUrl: "https://mirasvit.com/sales/invoice/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MirasvitCollector.CONFIG);
    }
}
