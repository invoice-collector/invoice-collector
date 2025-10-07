
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VAndKOodGabrovoCollector extends SketchCollector {

    static CONFIG = {
        id: "v_and_k_ood_gabrovo",
        name: "V and K OOD Gabrovo",
        description: "i18n.collectors.v_and_k_ood_gabrovo.description",
        version: "0",
        website: "https://my.idocs.bg/Users/Documents.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221884.jpg",
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
        entryUrl: "https://my.idocs.bg/Users/Documents.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VAndKOodGabrovoCollector.CONFIG);
    }
}
