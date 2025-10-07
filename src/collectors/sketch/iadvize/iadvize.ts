
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IadvizeCollector extends SketchCollector {

    static CONFIG = {
        id: "iadvize",
        name: "Iadvize",
        description: "i18n.collectors.iadvize.description",
        version: "0",
        website: "https://www.iadvize.com/admin/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120459.jpg",
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
        entryUrl: "https://www.iadvize.com/admin/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IadvizeCollector.CONFIG);
    }
}
