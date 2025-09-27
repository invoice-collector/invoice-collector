
import { SketchCollector } from '../../sketchCollector';

export class AvironActiveCollector extends SketchCollector {

    static CONFIG = {
        id: "aviron_active",
        name: "Aviron Active",
        description: "i18n.collectors.aviron_active.description",
        version: "0",
        website: "https://accounts.avironactive.com/login?redirect=https://accounts.avironactive.com/membership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131278.jpg",
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
        entryUrl: "https://accounts.avironactive.com/login?redirect=https://accounts.avironactive.com/membership",
    }

    constructor() {
        super(AvironActiveCollector.CONFIG);
    }
}
