
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BavariaFilamentsCollector extends SketchCollector {

    static CONFIG = {
        id: "bavaria_filaments",
        name: "Bavaria Filaments",
        description: "i18n.collectors.bavaria_filaments.description",
        version: "0",
        website: "https://www.bavaria-filaments.com//_api/invoice/5be32b7a-b921-448e-9c3c-b8af81a67e7b:9c7bae06-4ba7-43d6-a734-895fc27d2c42/view?token=e85acb71-f8eb-468c-a0e5-4c28229c4f60",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1744808.jpg",
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
        loginUrl: "https://www.bavaria-filaments.com//_api/invoice/5be32b7a-b921-448e-9c3c-b8af81a67e7b:9c7bae06-4ba7-43d6-a734-895fc27d2c42/view?token=e85acb71-f8eb-468c-a0e5-4c28229c4f60",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BavariaFilamentsCollector.CONFIG);
    }
}
