
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MivaCollector extends SketchCollector {

    static CONFIG = {
        id: "miva",
        name: "MIVA",
        description: "i18n.collectors.miva.description",
        version: "0",
        website: "https://www.miva.com/mm5/merchant.mvc?Screen=ACLN",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29512.jpg",
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
        entryUrl: "https://www.miva.com/mm5/merchant.mvc?Screen=ACLN",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MivaCollector.CONFIG);
    }
}
