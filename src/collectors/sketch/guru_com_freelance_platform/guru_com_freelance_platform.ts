
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GuruComFreelancePlatformCollector extends SketchCollector {

    static CONFIG = {
        id: "guru_com_freelance_platform",
        name: "Guru.com - Freelance Platform",
        description: "i18n.collectors.guru_com_freelance_platform.description",
        version: "0",
        website: "https://www.guru.com/pay/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/584666.jpg",
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
        entryUrl: "https://www.guru.com/pay/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GuruComFreelancePlatformCollector.CONFIG);
    }
}
