
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrefectCollector extends SketchCollector {

    static CONFIG = {
        id: "prefect",
        name: "Prefect",
        description: "i18n.collectors.prefect.description",
        version: "0",
        website: "https://app.prefect.cloud/my/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374759.jpg",
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
        entryUrl: "https://app.prefect.cloud/my/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrefectCollector.CONFIG);
    }
}
