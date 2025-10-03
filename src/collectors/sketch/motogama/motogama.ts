
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MotogamaCollector extends SketchCollector {

    static CONFIG = {
        id: "motogama",
        name: "MOTOGAMA",
        description: "i18n.collectors.motogama.description",
        version: "0",
        website: "https://motogama.integra.com.pl/Accounts/OpenExportAccount.rails?d=Thu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860295.jpg",
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
        entryUrl: "https://motogama.integra.com.pl/Accounts/OpenExportAccount.rails?d=Thu",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MotogamaCollector.CONFIG);
    }
}
