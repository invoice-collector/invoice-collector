
import { SketchCollector } from '../../sketchCollector';

export class VirtualStagingAiCollector extends SketchCollector {

    static CONFIG = {
        id: "virtual_staging_ai",
        name: "Virtual Staging AI",
        description: "i18n.collectors.virtual_staging_ai.description",
        version: "0",
        website: "https://www.virtualstagingai.app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642524.jpg",
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
        entryUrl: "https://www.virtualstagingai.app/login",
    }

    constructor() {
        super(VirtualStagingAiCollector.CONFIG);
    }
}
