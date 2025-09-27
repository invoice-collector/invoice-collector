
import { SketchCollector } from '../../sketchCollector';

export class TailwindAppCollector extends SketchCollector {

    static CONFIG = {
        id: "tailwind_app",
        name: "Tailwind App",
        description: "i18n.collectors.tailwind_app.description",
        version: "0",
        website: "https://www.tailwindapp.com/dashboard/settings/billing/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11293.jpg",
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
        entryUrl: "https://www.tailwindapp.com/dashboard/settings/billing/statements",
    }

    constructor() {
        super(TailwindAppCollector.CONFIG);
    }
}
