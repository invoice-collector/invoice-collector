
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IpackProfiCollector extends SketchCollector {

    static CONFIG = {
        id: "ipack_profi",
        name: "ipack Profi",
        description: "i18n.collectors.ipack_profi.description",
        version: "0",
        website: "https://ipackprofi.at/login/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236076.jpg",
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
        entryUrl: "https://ipackprofi.at/login/bills",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IpackProfiCollector.CONFIG);
    }
}
